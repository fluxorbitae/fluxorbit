import CartModal from '@/components/cart/modal';
import { getCollectionProducts, getCollections } from '@/lib/fourthwall';
import { Fade, Flex, Row } from '@once-ui-system/core';
import { CurrencySelector } from './currency';
import { MobileNavigation } from './MobileNavigation';
import { NavButtons } from './NavButtons';

export async function Header({currency}: {currency: string}) {
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
    <Row fillWidth position="sticky" top="0" zIndex={9}>
      <Fade fillWidth position="absolute" pattern={{ display: true, size: "2" }} top="0" height="80" />
      <Flex as="nav" fillWidth
        horizontal="space-between" height="64" vertical="center"
        paddingX="16">
        <Row fillWidth vertical="center" horizontal="space-between" gap="16">
          <Row fillWidth vertical="center" gap="8">
            <MobileNavigation collections={collectionsWithProducts} />
          </Row>
          <NavButtons collections={collectionsWithProducts} />
          <Row gap="8" fillWidth horizontal="end">
            <CurrencySelector currency={currency} />
            <CartModal />
          </Row>
        </Row>
      </Flex>
    </Row>
  );
}
