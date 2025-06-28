"use client";

import { mailchimp, social } from "@/resources/once-ui.config";
import { Product } from "@/lib/types";
import { Button, Column, Icon, Logo, Row, SmartLink } from "@once-ui-system/core";
import { Mailchimp } from "../Mailchimp";

interface FooterProps {
  collections?: Array<{
    title: string;
    handle: string;
    products?: Product[];
  }>;
}

export function Footer({ collections }: FooterProps) {
  return (
    <Column gap="40" fillWidth paddingY="xl" paddingX="24" horizontal="center">
      {mailchimp.display && (<Mailchimp maxWidth="m" marginBottom="xl"/>)}
      <Row gap="16" textVariant="label-default-m" maxWidth="m" vertical="center">
        <Logo href="/" icon="/trademarks/icon-dark.svg" size="xl"/>
        <Button data-border="rounded" size="s" weight="default" variant="tertiary" href="https://once-ui.com/templates">
          <Row gap="12" vertical="center">
            Launch your own merch store
            <Icon size="xs" name="arrowUpRight" onBackground="brand-medium"/>
          </Row>
        </Button>
      </Row>
      <Row maxWidth="m" horizontal="space-between" gap="40" wrap paddingX="2">
        <Column gap="12" textVariant="label-default-m">
          <Row paddingX="8" marginBottom="8">Collections</Row>
          {collections?.map((item) => (
            <Row key={item.handle}>
              <SmartLink href={`/collections/${item.handle}`}>{item.title}</SmartLink>
            </Row>
          ))}
        </Column>
        <Column gap="12" textVariant="label-default-m">
          <Row paddingX="8" marginBottom="8">Resources</Row>
          <Row>
            <SmartLink href="/about">About us</SmartLink>
          </Row>
          <Row>
            <SmartLink href="/terms">Terms of Use</SmartLink>
          </Row>
          <Row>
            <SmartLink href="/privacy">Privacy Policy</SmartLink>
          </Row>
          <Row>
            <SmartLink href="/returns">Return Policy</SmartLink>
          </Row>
        </Column>
        <Column gap="12" textVariant="label-default-m">
          <Row paddingX="8" marginBottom="8">Social</Row>
          {social.map((item) => (
            item.link && (
              <Button
                data-border="rounded"
                weight="default"
                key={item.name}
                href={item.link}
                prefixIcon={item.icon}
                label={item.name}
                size="s"
                variant="secondary"/>
              )
            ))}
        </Column>
      </Row>
    </Column>
  );
}
