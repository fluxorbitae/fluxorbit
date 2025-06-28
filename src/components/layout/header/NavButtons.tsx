'use client';

import { Icon, Row, ToggleButton } from '@once-ui-system/core';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';
import { ProductsClient } from './ProductsClient';

interface NavButtonsProps {
  collections: any[];
}

export function NavButtons({ collections }: NavButtonsProps) {
  const pathname = usePathname();
  
  return (
    <Row gap="4" fillWidth horizontal="center" maxWidth="l"  hide="m">
      <ToggleButton 
        data-border="rounded" 
        selected={pathname === '/'} 
        href="/"
      >
        <Row gap="8" vertical="center">
          <Icon size="s" onBackground="brand-medium" name="home"/>
          Home
        </Row>
      </ToggleButton>
      
      <Row className={styles.productsMenu}>
        <ToggleButton 
          data-border="rounded" 
          selected={pathname.startsWith('/collections')} 
          href="/collections/all"
        >
          <Row gap="8" vertical="center">
            <Icon size="s" onBackground="brand-medium" name="bag"/>
            Products
          </Row>
        </ToggleButton>
        <Row
          position="absolute"
          top="0"
          marginTop="32"
          padding="4"
          radius="l-4"
          transition="macro-medium"
          horizontal="center"
          overflow="hidden"
          style={{backdropFilter: 'blur(1rem)'}}
          className={styles.sidebar}
        >
          <ProductsClient collections={collections} />
        </Row>
      </Row>
      
      <ToggleButton 
        data-border="rounded" 
        selected={pathname === '/about'} 
        href="/about"
      >
        <Row gap="8" vertical="center">
          <Icon size="s" onBackground="brand-medium" name="people"/>
          About
        </Row>
      </ToggleButton>
    </Row>
  );
}
