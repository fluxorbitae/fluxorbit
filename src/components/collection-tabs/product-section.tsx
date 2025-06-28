'use client';

import { Collection, Product } from '@/lib/types';
import { Column, Heading, Text } from '@once-ui-system/core';
import { ProductGrid } from '@/components/ProductGrid';
import { useState } from 'react';
import { CollectionTabs } from './collection-tabs';

interface ProductSectionProps {
  initialProducts: Product[];
  collections: Collection[];
  initialCollection: string;
  currency: string;
}

export function ProductSection({
  initialProducts,
  collections,
  initialCollection,
  currency
}: ProductSectionProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [activeCollection, setActiveCollection] = useState<string>(initialCollection);

  const handleCollectionChange = (newProducts: Product[], collectionHandle: string) => {
    setProducts(newProducts);
    setActiveCollection(collectionHandle);
  };

  // Find the active collection title
  const activeCollectionTitle = collections.find(c => c.handle === activeCollection)?.title || 'Products';

  return (
    <Column fillWidth gap="16" >
      <Heading as="h2" variant="display-default-m" align="center">
        {activeCollectionTitle}
      </Heading>
      <Text marginBottom="xl" variant="body-default-l" onBackground="neutral-weak" align="center">
        Browse from high quality apparel and accessories
      </Text>
      
      <CollectionTabs
        collections={collections}
        initialCollection={initialCollection}
        currency={currency}
        onCollectionChange={handleCollectionChange}
      />
      
      <ProductGrid products={products} currency={currency} />
    </Column>
  );
}
