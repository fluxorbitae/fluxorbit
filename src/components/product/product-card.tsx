'use client';

import { Card, Column, Icon, Row, Media, SmartLink, Text } from '@once-ui-system/core';
import { Product } from '@/lib/types';
import Price from '../price';

interface ProductCardProps {
  product: Product;
  currency: string;
}

export function ProductCard({ product, currency }: ProductCardProps) {
  return (
    <SmartLink
      style={{
        backgroundColor: "var(--neutral-background-medium)",
        borderRadius: "var(--radius-xl)",
        zIndex: 1
      }}
      href={`/product/${product.handle}?currency=${currency}`} 
      unstyled
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
    >
      <Card fillWidth vertical="center" radius="m-8" paddingLeft="16" paddingY="16" paddingRight="0" background="page" maxWidth={32}>
        <Media 
          solid="brand-strong"
          background={undefined}
          src={product.images[0]?.url || "/images/design-engineers-club.jpg"} 
          alt={product.title}
          fillWidth
          style={{
            minWidth: "var(--responsive-space-xl)",
            maxWidth: "var(--responsive-space-xl)",
            minHeight: "var(--responsive-space-xl)",
            }} 
          sizes="360px"
          aspectRatio="1 / 1" 
          radius="m"
        />
        <Column gap="8" paddingX="20" textVariant="label-default-l" fillWidth>
          <Row fillWidth horizontal="space-between" gap="8">
            <Text onBackground="neutral-strong" wrap="balance">
              {product.title}
            </Text>
          </Row>
          <Text size="s" onBackground="neutral-weak">
          <Text onBackground="neutral-weak">
          <Price
            amount={product.priceRange.minVariantPrice.amount}
            currencyCode={product.priceRange.minVariantPrice.currencyCode}
          />
          </Text>
          </Text>
        </Column>
        <Column fillHeight paddingRight="16">
          <Icon name="arrowUpRight" size="s" onBackground="brand-medium" />
        </Column>
      </Card>
    </SmartLink>
  );
}