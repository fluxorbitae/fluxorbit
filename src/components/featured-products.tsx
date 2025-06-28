import { Background, Carousel, Column, Media, Text } from '@once-ui-system/core';
import { Product } from '@/lib/types';
import { ProductCard } from './product/product-card';

interface FeaturedProduct {
  promoImage: string;
  title: string;
  description: string;
  product: Product | null;
}

interface FeaturedProductsProps {
  products: FeaturedProduct[];
  currency: string;
}

export function FeaturedProducts({ products, currency }: FeaturedProductsProps) {
  return (
    <Carousel
      maxWidth="l"
      sizes="(max-width: 1200px) 100vw, 1200px"
      aspectRatio="2 / 1"
      items={products.map(({ promoImage, product, title, description }) => product ? ({
        slide: (
          <Column fill vertical="end" cursor="interactive">
            <Column fill gap="24" padding="l" vertical="end">
            <Media position="absolute" left="0" top="0" fillWidth aspectRatio='16 / 9' src={promoImage} alt={title || product.title} priority sizes="(max-width: 1200px) 100vw, 1200px"/>
            <Background position="absolute"
              top="0"
              left="0"
              pointerEvents="none"
              hide="s"
              dots={{
                display: true,
                size: "2",
                color: "backdrop",
                opacity: 100,
              }}
              gradient={{
                display: true,
                x: 0,
                y: 0,
                width: 100,
                height: 100,
                colorStart: "page-background",
                colorEnd: "page-background",
                opacity: 100
              }}
              mask={{
                x: 0,
                y: 0,
                radius: 75,
              }}
            />
            {(title || description) && (
              <Column  hide="s" fillHeight maxWidth={40} gap="32" >
                {title && <Text variant="display-default-l" onSolid="neutral-strong">{title}</Text>}
                {description && <Text wrap="balance" variant="heading-default-xl" onSolid="neutral-strong">{description}</Text>}
              </Column>
            )}
            <ProductCard product={product} currency={currency} />
            </Column>
          </Column>
        )
      }) : null).filter(Boolean) as any}
    />
  );
}
