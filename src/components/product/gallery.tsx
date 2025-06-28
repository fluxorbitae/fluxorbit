'use client';

import { Carousel } from '@once-ui-system/core';
import { useProduct } from '@/components/product/product-context';
import { Product } from '@/lib/types';

export function Gallery({ product }: { product: Product }) {
  const { state, updateImage } = useProduct();
  const imageIndex = state.image ? parseInt(state.image) : 0;

  const selectedVariant = product.variants.find((variant) => {
    return variant.selectedOptions.find((option) => option.name === 'Color' && option.value === state['color']);
  });

  const images = selectedVariant?.images || product.images.slice(0, 5);

  return (
    <>
      {images[imageIndex] && (
        <Carousel
          maxWidth={40}
          indicator="thumbnail"
          aspectRatio="4 / 5"
          sizes="(max-width: 1024px) 80vw, 560px"
          items={
            images.map((image) => ({
              slide: image.url,
              alt: image.altText
            }))
          }/>
      )}
    </>
  );
}
