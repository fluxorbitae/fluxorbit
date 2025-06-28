import { Cart, Collection, Product } from "@/lib/types";
import * as path from 'path';
import { reshapeCart, reshapeProduct, reshapeProducts } from "./reshape";
import { FourthwallCart, FourthwallCollection, FourthwallProduct } from "./types";

const API_URL = process.env.NEXT_PUBLIC_FW_API_URL || 'https://storefront-api.fourthwall.com/v1';
const STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_FW_STOREFRONT_TOKEN || '';

/**
 * Helpers
 */
async function fourthwallGet<T>(url: string, query: Record<string, string | number | undefined>, options: RequestInit = {}): Promise<{ status: number; body: T }> {
  const constructedUrl = new URL(url);
  // add query parameters
  Object.keys(query).forEach((key) => {
    if (query[key] !== undefined) {
      constructedUrl.searchParams.append(key, query[key].toString());
    }
  });
  constructedUrl.searchParams.append('storefront_token', STOREFRONT_TOKEN);

  try {
    const result = await fetch(
      constructedUrl.toString(),
      {
        method: 'GET',
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
      }
    );

    const body = await result.json();

    if (result.status !== 200) {
      console.error({
        status: result.status,
        url: constructedUrl.toString(),
        body,
      });

      throw new Error("Failed to fetch from Fourthwall");
    }

    return {
      status: result.status,
      body,
    };
  } catch (e) {
    throw {
      error: e,
      url
    };
  }
}

async function fourthwallPost<T>(url: string, data: any, options: RequestInit = {}): Promise<{ status: number; body: T }> {
  try {
    const result = await fetch(`${url}?storefront_token=${STOREFRONT_TOKEN}`, {
      method: 'POST',
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      body: JSON.stringify(data)
    });

    console.warn('POST', url, data);

    const bodyRaw = await result.text();
    console.warn('POST', bodyRaw);
    const body = JSON.parse(bodyRaw);

    return {
      status: result.status,
      body
    };
  } catch (e) {
    throw {
      error: e,
      url,
      data
    };
  }
}

/**
 * Collection operations
 */
export async function getCollections(): Promise<Collection[]> {
  const res = await fourthwallGet<{ results: FourthwallCollection[] }>(path.join(API_URL, 'collections'), {});

  const collections = res.body.results.map(collection => {
    // Extract number from beginning of name (if exists)
    const orderMatch = collection.name.match(/^(\d+)/);
    const order = orderMatch ? parseInt(orderMatch[0]) : 999;
    
    // Remove number, optional dot, and whitespace from beginning of name
    const cleanTitle = collection.name.replace(/^\d+\.?\s+/, '');
    
    // Set order to -1 for All Products to ensure it's always first
    const finalOrder = cleanTitle === 'All Products' ? -1 : order;
    
    return {
      handle: collection.slug,
      title: cleanTitle,
      description: collection.description,
      order: finalOrder
    };
  });

  // Sort by order number and remove the order property from final result
  return collections
    .sort((a, b) => a.order - b.order)
    .map(({ handle, title, description }) => ({ handle, title, description }));
}

export async function getCollectionProducts({
  collection,
  currency,
  limit,
}: {
  collection: string;
  currency: string;
  limit?: number;
}): Promise<Product[]> {
  const res = await fourthwallGet<{results: FourthwallProduct[]}>(path.join(API_URL, 'collections', collection, 'products'), {
    currency,
    limit
  });

  if (!res.body.results) {
    console.warn(`No collection found for \`${collection}\``);
    return [];
  }

  return reshapeProducts(res.body.results);
}

export async function getAllCollectionProducts({
  collection,
  currency,
  maxProducts = 100
}: {
  collection: string;
  currency: string;
  maxProducts?: number;
}): Promise<Product[]> {
  let allProducts: FourthwallProduct[] = [];
  let page = 1;
  const pageSize = 20; // Increase page size to get more products per request
  let hasMore = true;
  
  // First try to get all products with a single large request
  const initialRes = await fourthwallGet<{results: FourthwallProduct[]}>(
    path.join(API_URL, 'collections', collection, 'products'), 
    {
      currency,
      limit: maxProducts,
      sort: 'created_at:desc' // Sort by creation date to get the latest first
    }
  );

  if (initialRes.body.results && initialRes.body.results.length >= maxProducts) {
    // If we got the maximum number of products in one go, return them
    return reshapeProducts(initialRes.body.results);
  }
  
  // If we didn't get all products, start pagination
  allProducts = initialRes.body.results || [];
  
  // If we already have enough products or there are no more, return what we have
  if (allProducts.length >= maxProducts || !initialRes.body.results || initialRes.body.results.length < pageSize) {
    return reshapeProducts(allProducts);
  }
  
  // Otherwise continue with pagination
  page = 2; // Start from page 2 since we already got page 1
  
  while (hasMore && allProducts.length < maxProducts) {
    const res = await fourthwallGet<{results: FourthwallProduct[]}>(
      path.join(API_URL, 'collections', collection, 'products'), 
      {
        currency,
        limit: pageSize,
        page,
        sort: 'created_at:desc' // Sort by creation date to get the latest first
      }
    );
    
    if (!res.body.results || res.body.results.length === 0) {
      hasMore = false;
    } else {
      allProducts = [...allProducts, ...res.body.results];
      page++;
      
      // If we got fewer results than the page size, we've reached the end
      if (res.body.results.length < pageSize) {
        hasMore = false;
      }
    }
  }
  
  return reshapeProducts(allProducts);
}

/**
 * Fetch all products from multiple collections and combine them
 */
export async function fetchAllProducts({
  currency,
  maxProducts = 100
}: {
  currency: string;
  maxProducts?: number;
}): Promise<Product[]> {
  // First get all collection handles
  const collections = await getCollections();
  // Exclude the "all" collection since it's redundant
  const collectionHandles = collections
    .filter(c => c.handle !== 'all')
    .map(c => c.handle);
  
  // Fetch products from each collection in parallel
  const productPromises = collectionHandles.map(handle => 
    getCollectionProducts({ collection: handle, currency, limit: 50 })
  );
  
  const productsArrays = await Promise.all(productPromises);
  
  // Flatten and deduplicate products based on handle
  const productMap = new Map();
  
  productsArrays.forEach(products => {
    products.forEach(product => {
      if (!productMap.has(product.handle)) {
        productMap.set(product.handle, product);
      }
    });
  });
  
  const allProducts = Array.from(productMap.values());
 
  // Sort by creation date (newest first) if possible
  allProducts.sort((a, b) => {
    if (a.createdAt && b.createdAt) {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return 0;
  });
  
  // Limit to the requested number of products
  return allProducts.slice(0, maxProducts);
}

/**
 * Product operations
 */
export async function getProduct({ handle, currency } : { handle: string, currency: string }): Promise<Product | undefined> {
  const res = await fourthwallGet<FourthwallProduct>(path.join(API_URL, 'products', handle), { currency });

  return reshapeProduct(res.body);
}

/**
 * Cart operations
 */
export async function getCart(cartId: string | undefined, currency: string): Promise<Cart | undefined> {
  if (!cartId) {
    return undefined;
  }

  try {
    const res = await fourthwallGet<FourthwallCart>(path.join(API_URL, 'carts', cartId), {
      currency
    }, {
      cache: 'no-store'
    });

    return reshapeCart(res.body);
  } catch (e) {
    console.error('CART ERROR', e);
    return undefined;
  }
}

export async function createCart(): Promise<Cart> {
  try {
    const res = await fourthwallPost<FourthwallCart>(path.join(API_URL, 'carts'), {
      items: []
    });

    return reshapeCart(res.body);
  } catch (e) {
    console.error('CART CREATE ERROR', e);
    throw e;
  }
}

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {

  const items = lines.map((line) => ({
    variantId: line.merchandiseId,
    quantity: line.quantity
  }));

  const res = await fourthwallPost<FourthwallCart>(path.join(API_URL, 'carts', cartId, 'add'), {
    items,
  }, {
    cache: 'no-store'    
  });

  return reshapeCart(res.body);
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
  const items = lineIds.map((id) => ({
    variantId: id
  }));

  const res = await fourthwallPost<FourthwallCart>(path.join(API_URL, 'carts', cartId, 'remove'), {
    items,
  }, {
    cache: 'no-store'
  });

  return reshapeCart(res.body);
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const items = lines.map((line) => ({
    variantId: line.merchandiseId,
    quantity: line.quantity
  }));

  const res = await fourthwallPost<FourthwallCart>(path.join(API_URL, 'carts', cartId, 'change'), {
    items,
  }, {
    cache: 'no-store'
  });

  return reshapeCart(res.body);
}
