'use client';

import { Product } from '@/lib/types';
import { Card, Column, Grid, Row, Media, SmartLink } from '@once-ui-system/core';

interface ProductsClientProps {
  fillTiles?: boolean;
  collections: Array<{
    title: string;
    handle: string;
    products?: Product[];
  }>;
}

export function ProductsClient({ collections, fillTiles }: ProductsClientProps) {
  return (
      <Row overflow="hidden" radius="m-8" maxWidth={72}>
        <Column
          maxWidth={72}
          fillWidth
          background="surface"
          border="neutral-alpha-weak"
          as="nav"
          padding="8"
          gap="24"
          overflowX="auto"
          overflowY="auto">
        <Row gap="4" fillWidth tabletDirection="column">
          {collections?.map((item) => (
            <SmartLink unstyled href={`/collections/${item.handle}`} key={item.title} fillWidth={fillTiles}> 
              <Card tabIndex={-1} direction="column" tabletDirection="row" radius="m" background="surface" border="neutral-alpha-weak" fitWidth={!fillTiles} fillWidth={fillTiles} fillHeight>
                  {item.title.toLowerCase() === 'all products' && item.products && item.products.length >= 4 ? (
                    <Column fillWidth>
                      <Grid columns="2" gap="4" width="160">
                        {item.products.slice(0, 4).map((product, index) => (
                          <Media
                            tabIndex={-1}
                            key={index}
                            solid="brand-weak"
                            sizes="160px"
                            src={product.featuredImage?.url || ''} 
                            alt={`Product ${index + 1} in ${item.title}`}
                            fillWidth
                            aspectRatio="3 / 4"
                            radius="m"
                            objectFit="cover"
                          />
                        ))}
                      </Grid>
                    </Column>
                  ) : (
                    item.products?.[0]?.featuredImage?.url && (
                      <Media
                        tabIndex={-1}
                        solid="brand-weak"
                        sizes="360px"
                        src={item.products[0].featuredImage.url} 
                        alt={`First product in ${item.title}`}
                        width="160"
                        aspectRatio="3 / 4"
                        radius="m"
                        objectFit="cover"
                      />
                    )
                  )}
                  <Row fillWidth paddingX="16" paddingY="12" textVariant="label-default-s" onBackground="neutral-strong" align="center" center>
                    {item.title}
                  </Row>
                </Card>
            </SmartLink>
          ))}
        </Row>
      </Column>
    </Row>
  );
}
