import { schema } from "@/resources/once-ui.config";
import { getCartId } from "@/components/cart/actions";
import { Wrapper } from "@/components/wrapper";
import { getCart } from "@/lib/fourthwall";
import { Column, Heading, SmartLink, Text } from "@once-ui-system/core";

type Props = {
  searchParams?: Promise<{ currency?: string }>;
}

export async function generateMetadata() {
  return {
    title: "Return Policy",
  };
}

export default async function About({searchParams}: Props) {
  const cartId = await getCartId();
  const currencyParams = await searchParams;
  const currency = currencyParams?.currency || 'USD';
  const cart = getCart(cartId, currency);

  return (
    <Wrapper currency={currency} cart={cart}>
      <Column fillWidth maxWidth="s" gap="32" paddingY="128" paddingX="l" onBackground="neutral-medium">
        <Heading>
          Return Policy
        </Heading>
        <Text variant="body-default-m">
          We want to make sure you love our products, and quality is guaranteed. If there is a print error or visible quality issue, we'll replace or refund it. For any quality issues, be sure to provide clear photos of the products on a flat, well-lit surface and include this in your email to us at <SmartLink unstyled href={`mailto:${schema.email}`}>{schema.email}</SmartLink>. This quick and simple step will help us provide a speedy resolution.
          Because products are made to order, we do not accept general returns or sizing-related returns. 
        </Text>
        <Heading as="h2">
          Cancellations
        </Heading>
        <Heading as="h3">
          Product Orders Cancellation Policy
        </Heading>
        <Text variant="body-default-m">
          All of our products are made to order, especially for you. If you wish to cancel or amend your order, please use the link provided in your confirmation email. You can edit your order at any time before it goes to production.
        </Text>
        <Text variant="body-default-m">
          Once your order has gone to production, you may be eligible for a replacement/resolution, depending on the situation. After you’ve received your order, you have 30 days to address any quality issues. 
        </Text>
        <Heading as="h3">
          Donations and Tips Cancellation Policy
        </Heading>
        <Text variant="body-default-m">
          Please note that donations and tips are non-cancellable and non-refundable. Once you have completed your checkout for donations or tips, we cannot cancel or refund it. 
        </Text>
        <Heading as="h2">
          Damaged/Quality Issues
        </Heading>
        <Text variant="body-default-m">
          For the fastest resolution, please include a photograph demonstrating the quality issue of the print or the damaged area of the item, along with your order number. The most optimal pictures are on a flat surface, with the tag and error clearly displayed.
        </Text>
        <Text variant="body-default-m">
          Please email us with these details at <SmartLink unstyled href={`mailto:${schema.email}`}>{schema.email}</SmartLink>
        </Text>
        <Heading as="h2">
          Refunds Policies
        </Heading>
        <Heading as="h3">
          Product Orders Cancellation Policy
        </Heading>
        <Text variant="body-default-m">
          Because products are made to order, we cannot issue refunds, returns, or exchanges for orders except for those with quality issues. Orders are non-refundable unless they meet these requirements and you provide support with a photograph demonstrating the quality issue. 
        </Text>
        <Text variant="body-default-m">
          PayPal: Any refunds processed will show back up in your PayPal account balance within 24 business hours.
        </Text>
        <Text variant="body-default-m">
          Credit Card: Any refunds processed via your credit/debit card will show back up in your bank account within 7 to 10 business days, depending on your bank.
        </Text>
        <Heading as="h3">
          Donations and Tips Cancellation Policy
        </Heading>
        <Text variant="body-default-m">
          Donations and tips are non-refundable. Once you have completed your checkout payment, we cannot cancel or refund your donation or tips. 
        </Text>
        <Heading as="h3">
          Locked Messages Refund Policy
        </Heading>
        <Text variant="body-default-m">
          Locked messages are non-refundable. Once you have completed your checkout payment, we cannot cancel or refund your locked message. If you have issues accessing the locked message after payment, please contact us at <SmartLink unstyled href={`mailto:${schema.email}`}>{schema.email}</SmartLink>. We’ll be happy to troubleshoot the problem and find a resolution for you. 
        </Text>
        <Heading as="h2">
          Accepted Payment Methods
        </Heading>
        <Text variant="body-default-m">
          We accept payments via credit/debit cards, PayPal, Google Pay, Apple Pay, and depending on your location, we also accept Klarna/AfterPay and local payment methods. 
        </Text>
        <Heading as="h2">
          International Orders
        </Heading>
        <Text variant="body-default-m">
          Will I have to pay any additional taxes on my order if I’m located outside of the US?
        </Text>
        <Text variant="body-default-m">
          International orders may be subject to import taxes, duties, and other customs charges. The charges vary by country, and at this time, we are unable to calculate them in advance. For more information regarding your country’s customs policies, please contact your local customs office. If such a fee indeed gets imposed on your package, you are responsible for its payment.
        </Text>
        <Heading as="h2">
          Merchant of record
        </Heading>
        <Text variant="body-default-m">
          Orders are handled by our Merchant of Record and merchandising partner, <SmartLink unstyled href="https://fourthwall.com">Fourthwall.com</SmartLink> who handle order-related inquiries and returns. Read our <SmartLink unstyled href="/privacy">Privacy Policy</SmartLink> and <SmartLink unstyled href="/terms">Terms of Service</SmartLink>.
        </Text>
      </Column>
    </Wrapper>
    )
}