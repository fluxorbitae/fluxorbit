'use server';

import { getCollectionProducts, getCollections } from '@/lib/fourthwall';
import { ProductsClient } from './header/ProductsClient';

export async function Products() {
  const collections = await getCollections();
  
  // Fetch first product for each collection
  const collectionsWithProducts = await Promise.all(
    collections.map(async (collection) => {
      const products = await getCollectionProducts({ 
        collection: collection.handle, 
        currency: 'USD',
        limit: 1 
      });
      
      return {
        ...collection,
        products
      };
    })
  );

  return (
    <ProductsClient collections={collectionsWithProducts} />
  );
}