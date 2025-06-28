'use client';

import { Button, Card, Column, Flex, Heading, Icon, IconButton, Row, Media, SmartLink, Text } from '@once-ui-system/core';
import Price from '@/components/price';
import { DEFAULT_OPTION } from '@/lib/constants';
import { createUrl } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { redirectToCheckout } from './actions';
import { useCart } from './cart-context';
import { DeleteItemButton } from './delete-item-button';
import { EditItemQuantityButton } from './edit-item-quantity-button';

import styles from "./modal.module.scss";

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal() {
  const { cart, updateCartItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => setIsOpen(!isOpen);
  const quantityRef = useRef(cart?.totalQuantity);
  const { pending } = useFormStatus();

  useEffect(() => {
    if (
      cart?.totalQuantity &&
      cart?.totalQuantity !== quantityRef.current &&
      cart?.totalQuantity > 0
    ) {
      if (!isOpen) {
        setIsOpen(true);
      }
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <Flex zIndex={3}>
        <IconButton aria-label="Open cart" onClick={toggleCart}>
          <Icon size="s" name="cart"/>
          {(cart?.totalQuantity ?? 0) > 0 && (
            <Flex position="absolute" style={{top: "-0.25rem", right: "-0.25rem"}} width="16" height="16" center radius="full" solid="accent-medium" border="accent-alpha-strong" onSolid="neutral-strong" textVariant="body-default-xs">
              {cart?.totalQuantity ?? 0}
            </Flex>
          )}
        </IconButton>
      </Flex>
      <Column maxWidth={32} position="fixed" padding="8" top="0" right="0" fillHeight transition="macro-medium" className={`${styles.panel} ${isOpen && styles.open}`}>
        <Column fill radius="xl" background="page" border="neutral-alpha-weak" shadow="xl">
          <Column fill>
            <Row fillWidth padding="20">
              <Heading as="h2">Cart</Heading>
            </Row>
            {!cart || cart.lines.length === 0 ? (
              <Row fillWidth horizontal="center" paddingY="40">
                <Text align="center" onBackground="neutral-medium">
                  Your cart is empty.
                </Text>
              </Row>
            ) : (
              <Column fill>
              <Column fill overflowY="auto" 
                borderTop="neutral-alpha-medium">
                {cart.lines
                  .sort((a, b) =>
                    a.merchandise.product.title.localeCompare(b.merchandise.product.title)
                  )
                  .map((item, i) => {
                    const merchandiseSearchParams = {} as MerchandiseSearchParams;

                    item.merchandise.selectedOptions.forEach(({ name, value }) => {
                      if (value && value !== DEFAULT_OPTION) {
                        merchandiseSearchParams[name.toLowerCase()] = value;
                      }
                    });

                    const merchandiseUrl = createUrl(
                      `/product/${item.merchandise.product.handle}`,
                      new URLSearchParams(merchandiseSearchParams)
                    );

                    return (
                        <Column fillWidth
                          key={i}>
                          <SmartLink
                              fillWidth
                              unstyled
                              href={merchandiseUrl}
                            >
                          <Card
                            padding="16" gap="24" fillWidth
                            vertical="center"
                            borderBottom="neutral-alpha-medium">
                            <Media
                              radius="l"
                              sizes="320px"
                              minWidth="64"
                              maxWidth="64"
                              aspectRatio="1 / 1"
                              alt={
                                item.merchandise.product.featuredImage.altText ||
                                item.merchandise.product.title
                              }
                              src={item.merchandise.product.featuredImage.url}
                            />
                            <Column fillWidth gap="4">
                            <Row vertical="center" fillWidth gap="16" textVariant="body-default-m">
                              <Flex fillWidth onBackground="neutral-strong" overflow="hidden">
                                <Text style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', width: '100%'}}>
                                  {item.merchandise.product.title}
                                </Text>
                              </Flex>
                              <Text onBackground="neutral-medium" size="s">
                                <Price
                                  amount={item.cost.totalAmount.amount}
                                  currencyCode={item.cost.totalAmount.currencyCode}
                                />
                              </Text>
                              </Row>
                              <Text onBackground="neutral-weak" variant="body-default-xs">
                                {item.merchandise.title.replace(item.merchandise.product.title, '').trim().replace(/^- /, '')}
                              </Text>
                              <Row vertical="center" gap="12" marginTop="8">
                                <EditItemQuantityButton
                                  item={item}
                                  type="minus"
                                  optimisticUpdate={updateCartItem}
                                />
                                <Text onBackground="neutral-strong">
                                  {item.quantity}
                                </Text>
                                <EditItemQuantityButton
                                  item={item}
                                  type="plus"
                                  optimisticUpdate={updateCartItem}
                                />
                              </Row>
                            </Column>
                            <DeleteItemButton item={item} optimisticUpdate={updateCartItem} />
                          </Card>
                          </SmartLink>
                      </Column>
                    );
                  })}
                </Column>

                <Column fillWidth padding="24">
                  <form action={() => redirectToCheckout(cart.currency)}>
                    <Button
                      fillWidth
                      type="submit"
                      weight="default"
                      loading={pending}
                      arrowIcon
                      disabled={pending}
                    >
                      <Flex vertical="center">
                        <Flex textVariant="label-strong-m" marginRight="12">Checkout</Flex>
                          <Flex onSolid="brand-weak" textVariant="label-default-s" horizontal="center">
                          <Price
                            amount={cart.cost.totalAmount.amount}
                            currencyCode={cart.cost.totalAmount.currencyCode}
                          />
                        </Flex>
                      </Flex>
                    </Button>
                  </form>
                  <Text onBackground="neutral-weak" variant="body-default-xs" align="center" marginTop="12">
                    Taxes and shipping are calculated at checkout
                  </Text>
                </Column>
              </Column>
            )}
            </Column>
          </Column>
      </Column>
    </>
  );
}
