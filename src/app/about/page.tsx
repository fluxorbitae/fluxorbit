import { getCartId } from "@/components/cart/actions";
import { Wrapper } from "@/components/wrapper";
import { getCart } from "@/lib/fourthwall";
import { AvatarGroup, Button, Column, Heading, Media, SmartLink, Text } from "@once-ui-system/core";

type Props = {
  searchParams?: Promise<{ currency?: string }>;
}

export async function generateMetadata() {
  return {
    title: "About us",
  };
}

export default async function About({searchParams}: Props) {
  const cartId = await getCartId();
  const currencyParams = await searchParams;
  const currency = currencyParams?.currency || 'USD';
  const cart = getCart(cartId, currency);

  return (
    <Wrapper currency={currency} cart={cart}>
      <Column
        fillWidth maxWidth="l" paddingY="l" gap="xl" mobileDirection="column" horizontal="center">
        <Media
          fill
          aspectRatio="2/1"
          radius="xl"
          sizes="(max-width: 1280px) 100vw, 1280px"
          src="/images/about.jpg"
          border="neutral-alpha-weak"
          shadow="xl"
          alt="Magic Store"/>
        <Column fillWidth maxWidth="xs" gap="l">
        <Heading variant="display-default-s" wrap="balance">
          Effortless Monetization for Creators
        </Heading>
        <Text variant="heading-default-m">
          Unlock your creative potential and start monetizing with ease. Magic Store, powered by the flexibility of Once UI and the simplicity of Fourthwall, provides the tools you need to build and grow your digital storefront.
        </Text>
        <Column textVariant="body-default-m" gap="m">
          <Text as="p">
            Stop wrestling with complex platforms. Magic Store offers a seamless experience, allowing you to focus on what you do best: creating. Leverage the beautiful, customizable components of <SmartLink href="https://once-ui.com" suffixIcon="arrowUpRight">Once UI</SmartLink> and the straightforward monetization features of <SmartLink href="https://fourthwall.com/" suffixIcon="arrowUpRight">Fourthwall</SmartLink> to launch your products and connect directly with your audience.
          </Text>
          <Text as="p">
            Whether you're selling digital templates, courses, or unique creations, Magic Store provides the foundation for your success. Build your brand, foster your community, and turn your passion into a sustainable income stream, effortlessly.
          </Text>
            </Column>
            <Button
                data-border="rounded"
                weight="default"
                id="de-club"
                variant="secondary"
                size="s"
                href="https://docs.once-ui.com/docs/magic-store/quick-start"
                arrowIcon>
                  Read the docs
            </Button>
        </Column>
      </Column>
    </Wrapper>
  )
}