'use client';

import { AccordionGroup, Column, Heading, Icon, Row, Text } from '@once-ui-system/core';
import { AddToCart } from '@/components/cart/add-to-cart';
import Price from '@/components/price';
import Prose from '@/components/prose';
import { Product } from '@/lib/types';
import { useProduct } from './product-context';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  let price = product.priceRange.minVariantPrice;
  
  try {
    const { state } = useProduct();
    
    // Find the selected variant based on the current state
    const selectedVariant = product.variants.find(variant =>
      variant.selectedOptions.every(
        option => state[option.name.toLowerCase()] === option.value
      )
    );

    if (selectedVariant) {
      price = selectedVariant.price;
    }
  } catch (error) {
    // If the context is not available, we'll use the default max price
    console.error('Product context not available:', error);
  }

  return (
    <Column fillWidth padding="l" gap="32">
      <Column fillWidth gap="16">
        <Heading variant="display-default-s">
          {product.title}
        </Heading>
        <Text onBackground="neutral-weak">
          <Price
            amount={price.amount}
            currencyCode={price.currencyCode}
          />
        </Text>
      </Column>
      <VariantSelector options={product.options} variants={product.variants} />
      {product.descriptionHtml ? (
        <Column fillWidth gap="12">
          <Text variant="label-default-s">
            About
          </Text>
          <Prose
            html={product.descriptionHtml}
          />
        </Column>
      ) : null}
      <AddToCart product={product} />
      <AccordionGroup items={[
        {
          title: <Row vertical="center" gap="12"><Icon name="quality" size="xs" /> <Text variant="label-default-m">Quality assurance</Text></Row>,
          content:
          <Text variant="body-default-s">
            Quality is guaranteed. If there is a print error or visible quality issue, we'll replace or refund it.
          </Text>,
        },
        {
          title: <Row vertical="center" gap="12"><Icon name="delivery" size="xs" /> <Text variant="label-default-m">Shipping</Text></Row>,
          content:
          <Text variant="body-default-s">
            We ship worldwide. Shipping rate is calculated at checkout. Shipping usually takes 1-2 weeks depending on the destination.
          </Text>,
        },
        {
          title: <Row vertical="center" gap="12"><Icon name="refresh" size="xs" /> <Text variant="label-default-m">Return policy</Text></Row>,
          content:
          <Text variant="body-default-s">
            Because the products are made to order, we do not accept general returns or sizing-related returns.
          </Text>,
        },
      ]} />
    </Column>
  );
}