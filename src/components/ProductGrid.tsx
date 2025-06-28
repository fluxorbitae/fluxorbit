"use client";

import { Card, Column, Flex, Grid, Row, Media, SmartLink, Text } from '@once-ui-system/core';

interface Product {
  handle: string;
  title: string;
  featuredImage?: {
    url: string;
  };
  images?: {
    url: string;
  }[];
  priceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  variants?: {
    attributes?: {
      color?: {
        name: string;
        swatch: string;
      };
    };
  }[];
}

interface ProductGridProps {
  products: Product[];
  currency: string;
}

// Component to render color swatches
const ColorSwatches = ({ variants }: { variants?: Product['variants'] }) => {
  if (!variants || variants.length <= 1) return null;
  
  // Extract unique colors from variants
  const uniqueColors = Array.from(
    new Map(
      variants
        .filter(variant => variant?.attributes?.color?.swatch)
        .map(variant => [
          variant?.attributes?.color?.name,
          variant?.attributes?.color?.swatch
        ])
    ).values()
  );
  
  // If no colors or just one color, don't render anything
  if (uniqueColors.length <= 1) return null;
  
  return (
    <Row gap="4">
      {uniqueColors.map((swatch, index) => (
        <Column 
          key={index} 
          width="16" 
          height="16" 
          radius="full" 
          border="neutral-alpha-medium" 
          style={{ backgroundColor: swatch || '#CCCCCC' }} 
        />
      ))}
    </Row>
  );
};

export function ProductGrid({ products, currency }: ProductGridProps) {
  if (!products?.length) return null;

  // Add inline styles for the product image container
  const imageContainerStyle = {
    position: 'relative' as const
  };

  // Add inline styles for the second image
  const secondImageStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  };

  // Add inline styles for the hover effect
  const hoverContainerStyle = {
    cursor: 'pointer'
  };

  return (
    <Grid columns="3" tabletColumns="2" mobileColumns="1" gap="12" fillWidth>
      {products.map((product, i) => {
        // Get second image if available
        const secondImage = product.images && product.images.length > 1 ? product.images[1].url : null;
        
        return (
          <SmartLink
            key={`${product.handle}${i}`}
            unstyled
            fillWidth
            href={`/product/${product.handle}?currency=${currency}`}>
            <Card
              background="transparent"
              border="transparent"
              radius="l"
              fillWidth
              direction="column">
              <div 
                style={imageContainerStyle} 
                className="product-image-container"
                onMouseEnter={(e) => {
                  const secondImage = e.currentTarget.querySelector('.second-image-container');
                  if (secondImage) {
                    (secondImage as HTMLElement).style.opacity = '1';
                  }
                }}
                onMouseLeave={(e) => {
                  const secondImage = e.currentTarget.querySelector('.second-image-container');
                  if (secondImage) {
                    (secondImage as HTMLElement).style.opacity = '0';
                  }
                }}
              >
                <Media
                  solid="brand-weak"
                  radius="l"
                  aspectRatio="4 / 5"
                  alt={product.title}
                  src={product.featuredImage?.url || ""}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
                {secondImage && (
                  <div 
                    style={secondImageStyle}
                    className="second-image-container"
                  >
                    <Media
                      solid="brand-weak"
                      radius="l"
                      aspectRatio="4 / 5"
                      alt={`${product.title} - alternate view`}
                      src={secondImage}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    />
                  </div>
                )}
              </div>
              <Column gap="4" fillWidth paddingY="20" paddingX="24">
                <Row fillWidth horizontal="space-between" vertical="center">
                <Text onBackground="neutral-strong" variant="heading-default-xs">{product.title}</Text>
                  <ColorSwatches variants={product.variants} />
                </Row>
                <Flex gap="8" textVariant="body-default-s">
                  <Text onBackground="neutral-strong">{product.priceRange.minVariantPrice.amount}</Text>
                  <Text onBackground="neutral-weak">{product.priceRange.minVariantPrice.currencyCode}</Text>
                </Flex>
              </Column>
            </Card>
          </SmartLink>
        );
      })}
    </Grid>
  );
}