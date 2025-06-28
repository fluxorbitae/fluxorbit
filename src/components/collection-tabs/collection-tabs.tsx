'use client';

import { Collection, Product } from '@/lib/types';
import { Button, Row, Scroller } from '@once-ui-system/core';
import { useState } from 'react';

interface CollectionTabsProps {
  collections: Collection[];
  initialCollection: string;
  currency: string;
  onCollectionChange: (products: Product[], collectionHandle: string) => void;
}

export function CollectionTabs({
  collections,
  initialCollection,
  currency,
  onCollectionChange
}: CollectionTabsProps) {
  const [activeCollection, setActiveCollection] = useState(initialCollection);
  const [isLoading, setIsLoading] = useState(false);

  const handleCollectionClick = async (collectionHandle: string) => {
    if (collectionHandle === activeCollection) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`/api/collections/${collectionHandle}?currency=${currency}`);
      
      if (!response.ok) throw new Error('Failed to fetch collection products');
      
      const data = await response.json();
      setActiveCollection(collectionHandle);
      onCollectionChange(data.products, collectionHandle);
    } catch (error) {
      console.error('Error fetching collection:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Scroller paddingX="24">
      <Row gap="8">
        {collections.map((col) => (
          <Button
            key={col.handle}
            label={col.title}
            size="s"
            weight={col.handle === activeCollection ? "strong" : "default"}
            variant={col.handle === activeCollection ? "primary" : "secondary"}
            onClick={() => handleCollectionClick(col.handle)}
          />
        ))}
      </Row>
    </Scroller>
  );
}
