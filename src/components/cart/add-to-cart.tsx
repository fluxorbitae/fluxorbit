'use client';

import { Button, Row, Text } from '@once-ui-system/core';
import { addItem } from '@/components/cart/actions';
import { useProduct } from '@/components/product/product-context';
import { Product, ProductVariant } from '@/lib/types';
import { useActionState } from 'react';
import { useCart } from './cart-context';

function SubmitButton({
  availableForSale,
  selectedVariantId
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  if (!availableForSale) {
    return (
      <Button size="l" disabled fillWidth>
        Select a product
      </Button>
    );
  }

  if (!selectedVariantId) {
    return (
      <Button
        aria-label="Please select an option"
        disabled
        fillWidth
        size="l"
        prefixIcon="plus"
      >
        Add To Cart
      </Button>
    );
  }

  return (
    <Button
      type="submit"
      fillWidth
      prefixIcon="plus"
      size="l"
      aria-label="Add to cart"
    >
      Add To Cart
    </Button>
  );
}

export function AddToCart({ product }: { product: Product }) {
  const { variants } = product;
  const { addCartItem } = useCart();
  const { state } = useProduct();
  const [message, formAction] = useActionState(addItem, null);


  // Find the variant that matches the selected options
  const variant = variants.find((variant: ProductVariant) => {
    // Check if all selected options match this variant
    return variant.selectedOptions.every((option) => {
      const optionName = option.name.toLowerCase();
      return option.value === state[optionName];
    });
  });
  
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);
  
  // Make sure we have a valid variant
  const finalVariant = variants.find((v) => v.id === selectedVariantId);
  
  // Check if the selected variant is available for sale
  const isVariantAvailableForSale = finalVariant?.availableForSale || false;

  return (
    <form
      action={async () => {
        // Only add to cart if variant is available
        if (finalVariant && isVariantAvailableForSale) {
          addCartItem(finalVariant, product);
          await actionWithVariant();
        } else {
          console.error('Cannot add to cart: Variant is not available for sale');
        }
      }}
    >
      <SubmitButton 
        availableForSale={isVariantAvailableForSale} 
        selectedVariantId={selectedVariantId} 
      />
      {message && (
        <Row fillWidth marginTop="16" horizontal="center">
          <Text onBackground="danger-medium" align="center" size="s">
            {message}
          </Text>
        </Row>
      )}
    </form>
  );
}
