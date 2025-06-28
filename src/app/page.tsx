import { Product } from '@/lib/types';
import { Background, Column, Line, Row } from '@once-ui-system/core';
import { getCartId } from '@/components/cart/actions';
import { ProductSection } from '@/components/collection-tabs/product-section';
import { FeaturedProducts } from '@/components/featured-products';
import { Wrapper } from '@/components/wrapper';
import { fetchAllProducts, getCart, getCollections, getProduct } from '@/lib/fourthwall';
import { featuredProducts } from '@/resources/once-ui.config';

export default async function HomePage({ searchParams }: { searchParams?: Promise<{ currency?: string }> }) {
  const cartId = await getCartId();

  const currencyParams = await searchParams;
  const currency = currencyParams?.currency || 'USD';

  const products = await fetchAllProducts({
    currency,
    maxProducts: 100
  });

  const collections = await getCollections();

  const cart = getCart(cartId, currency);

  const featuredResults = await Promise.allSettled(
    featuredProducts.map(async ({ relatedProduct, promoImage, title, description }) => ({
      promoImage,
      title,
      description,
      product: await getProduct({ handle: relatedProduct, currency })
    }))
  );

  const featured = featuredResults
    .filter((result): result is PromiseFulfilledResult<{promoImage: string; title: string; description: string; product: Product | undefined}> => 
      result.status === 'fulfilled')
    .map(result => ({
      promoImage: result.value.promoImage,
      title: result.value.title,
      description: result.value.description,
      product: result.value.product ?? null
    }))
    .filter(item => item.product !== null);

  return (
    <Wrapper currency={currency} cart={cart}>
      {featured.length > 0 && (
        <Row fillWidth paddingX="8" paddingBottom="l">
          <Column fillWidth  aspectRatio="3 / 1" paddingY="l" horizontal="center">
            <FeaturedProducts products={featured} currency={currency} />
          </Column>
        </Row>
      )}
      <Column fillWidth maxWidth="l" paddingX="l" paddingTop="xl" horizontal="center" >
          <Background
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            gradient={{
              display: true,
              x: 50,
              y: 0,
              width: 100,
              height: 100,
              tilt: 0,
              colorStart: "brand-background-weak",
              colorEnd: "static-transparent",
              opacity: 50,
            }}
						dots={{
							display: true,
							opacity: 100,
							color: "page-background",
							size: "2",
						}}
            mask={{
              x: 50,
              y: 0,
              radius: 50,
            }}
					>
            <Line />
          </Background>
          <ProductSection 
            initialProducts={products}
            collections={collections}
            initialCollection={'all'}
            currency={currency}
          />
      </Column>
    </Wrapper>
  );
}
