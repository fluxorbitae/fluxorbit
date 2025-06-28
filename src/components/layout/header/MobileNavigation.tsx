'use client';

import { Logo, NavIcon, Row } from '@once-ui-system/core';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { ProductsClient } from './ProductsClient';
import styles from './header.module.css';

interface MobileNavigationProps {
  collections: any[];
}

export function MobileNavigation({ collections }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <NavIcon 
        show="m"
        isActive={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <Logo href="/" wordmark="/trademarks/type-dark.svg" size="s"/>
      <Row
        position="absolute"
        top="0"
        marginTop="40"
        padding="8"
        horizontal="center"
        transition="macro-medium"
        maxWidth={32}
        minWidth={24}
        overflow="hidden"
        className={classNames(styles.mobileNav, styles.panel, {
          [styles.open]: isOpen
        })}>
        <ProductsClient fillTiles collections={collections} />
      </Row>
    </>
  );
}