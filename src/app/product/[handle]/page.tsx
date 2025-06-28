import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ProductGrid } from '@/components/ProductGrid';
import { Column, Heading, Row, Skeleton } from '@once-ui-system/core';
import { getCartId } from '@/components/cart/actions';
import { Gallery } from '@/components/product/gallery';
import { ProductProvider } from '@/components/product/product-context';
import { ProductDescription } from '@/components/product/product-description';
import { Wrapper } from '@/components/wrapper';
import { getCart, getCollectionProducts, getProduct } from '@/lib/fourthwall';
import { Suspense } from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const handle = routeParams.handle;
  const product = await getProduct({ handle, currency: 'USD' });

  if (!product) return notFound();

  const { title, description } = product;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: product.images.map(({ url }) => ({
        url,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: product.images.map(({ url }) => url),
    },
  };
}

type Props = {
  params: Promise<{ handle: string }>;
  searchParams?: Promise<{ currency?: string }>;
};

export default async function ProductPage({ params, searchParams }: Props) {
  const currencyParams = await searchParams;
  const currency = currencyParams?.currency || 'USD';
  const cartId = await getCartId()
  const routeParams = await params;
  const handle = routeParams.handle;

  const cart = getCart(cartId, currency)
  
  const product = await getProduct({
    handle,
    currency,
  });

  if (!product) return notFound();

  // Get other products from the collection
  const collectionProducts = await getCollectionProducts({
    collection: process.env.NEXT_PUBLIC_FW_COLLECTION || 'all',
    currency,
    limit: 4
  });

  // Filter out the current product
  const otherProducts = collectionProducts.filter(p => p.handle !== product.handle);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <Wrapper currency={currency} cart={cart}>
      <ProductProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productJsonLd)
          }}
        />
        <Row fillWidth horizontal="center" paddingY="xl">
          <Row fillWidth tabletDirection="column" maxWidth="l">
            <Column fillWidth paddingX="l" horizontal="center">
              <Suspense
                fallback={
                  <Skeleton fillWidth shape="block"/>
                }
              >
                <Gallery
                  product={product}
                />
              </Suspense>
            </Column>
            
            <Row fillWidth horizontal="center">
              <Row fillWidth maxWidth={40} paddingBottom="40">
                <Suspense fallback={null}>
                  <ProductDescription product={product} />
                </Suspense>
              </Row>
            </Row>
          </Row>
        </Row>

        {otherProducts.length > 0 && (
          <Column fillWidth maxWidth="l" gap="56"  paddingBottom="l" paddingTop="m" paddingX="xl" horizontal="center">
            <Heading variant="display-default-xs" onBackground="neutral-strong" align="center">
              You might also like...
            </Heading>
            <ProductGrid products={otherProducts} currency={currency} />
          </Column>
        )}
      </ProductProvider>
    </Wrapper>
  );
}
