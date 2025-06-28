import { ProductGrid } from "@/components/ProductGrid";
import { Button, Column, Heading, Row, Scroller, Text } from "@once-ui-system/core";
import { getCartId } from "@/components/cart/actions";
import { Wrapper } from "@/components/wrapper";
import { fetchAllProducts, getCart, getCollectionProducts, getCollections } from "@/lib/fourthwall";

type Props = {
  params: Promise<{ handle: string }>;
  searchParams?: Promise<{ currency?: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
  const routeParams = await params;
  const handle = routeParams.handle;
  return {
    title: `Collection: ${handle}`,
  };
}

export default async function CategoryPage({
  params,
  searchParams
}: Props) {
  const cartId = await getCartId();
  const currencyParams = await searchParams;
  const currency = currencyParams?.currency || 'USD';
  const routeParams = await params;
  const handle = routeParams.handle;
  
  // Use the new approach for the "all" collection
  let products;
  if (handle === 'all') {
    products = await fetchAllProducts({ currency, maxProducts: 100 });
  } else {
    products = await getCollectionProducts({ collection: handle, currency, limit: 100 });
  }
    
  const cart = getCart(cartId, currency);  
  
  // Fetch collections and find the matching one
  const collections = await getCollections();
  const collection = collections.find(c => c.handle === handle);
  const collectionTitle = collection?.title || handle;

  return (
    <Wrapper currency={currency} cart={cart}>
      <Row fillWidth horizontal="center" paddingY="xl" paddingX="l">
      {products.length === 0 ? (
          <Heading>
            No products found in this collection
          </Heading>
      ) : (
        <Column fillWidth horizontal="center" gap="xl" maxWidth="l" paddingX="l">
          <Column fillWidth gap="16" position='relative'>
            <Heading as="h2" variant="display-default-m" align="center">
              {collectionTitle}
            </Heading>
            <Text wrap="balance" variant="body-default-l" onBackground="neutral-weak" align="center">
              Browse from high quality apparel and accessories
            </Text>
          </Column>
          <Column fillWidth gap="24">
            <Scroller paddingX="24">
              <Row gap="8">
                {collections.map((col) => (
                  <Button 
                    key={col.handle}
                    label={col.title}
                    size="s"
                    weight={col.handle === handle ? "strong" : "default"}
                    variant={col.handle === handle ? "primary" : "secondary"}
                    href={`/collections/${col.handle}`}
                  />
                ))}
              </Row>
            </Scroller>
            <ProductGrid products={products} currency={currency} />
          </Column>
        </Column>
      )}
      </Row>
    </Wrapper>
  );
}
