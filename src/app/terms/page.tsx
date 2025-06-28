import { baseURL, schema } from "@/resources/once-ui.config";
import { getCartId } from "@/components/cart/actions";
import { Wrapper } from "@/components/wrapper";
import { getCart } from "@/lib/fourthwall";
import { Column, Feedback, Heading, SmartLink, Text } from "@once-ui-system/core";

type Props = {
  searchParams?: Promise<{ currency?: string }>;
}

export async function generateMetadata() {
  return {
    title: "Terms of use",
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
      <Column gap="4">
        <Heading>
          Terms of Use
        </Heading>
        <Text variant="body-default-m">
          Last Updated: Oct 31, 2023
        </Text>
      </Column>
        <Feedback icon description="By clicking “I Accept,” or by otherwise accessing or using the Service, you agree that you have read and understood, and, as a condition to your use of the Service, you agree to be bound by the following terms and conditions, including Creator’s Privacy Policy (together, these “Terms”). If you are not eligible, or do not agree to the Terms, then you do not have our permission to use the Service. Your use of the Service, and Creator’s provision of the Service to you, constitutes an agreement by Creator and by you to be bound by these Terms."/>
        <Text variant="body-default-m">
          Welcome, and thank you for your interest in {schema.name} (“Creator,” “we,” or “us”) and our website at <SmartLink unstyled href={baseURL}>{baseURL}</SmartLink>. These Terms of Service are a legally binding contract between you and Creator regarding your use of the Service. Please read the following terms carefully.
        </Text>
        <Heading as="h2">
          Creator Service Overview
        </Heading>
        <Text variant="body-default-m">
          We offer a website where you can purchase merchandise that we make available for sale, including digital products and memberships (“Memberships”and, collectively with all other merchandise, "Products").
        </Text>
        <Heading as="h2">
          Eligibility
        </Heading>
        <Text variant="body-default-m">
          You must be at least 13 years old to use the Service. By agreeing to these Terms, you represent and warrant to us that: (a) you are at least 13 years old;(b) you have not previously been suspended or removed from the Service; and (c) your registration and your use of the Service is in compliance with any and all applicable laws and regulations. If you are an entity, organization, or Creator, the individual accepting these Terms on your behalf represents and warrants that they have authority to bind you to these Terms and you agree to be bound by these Terms.
        </Text>
        <Heading as="h2">
          Accounts and Registration
        </Heading>
        <Text variant="body-default-m">
          To access any Membership, you must register for an account. When you register for an account, you may be required to provide us with some information about yourself, such as your name, email address, or other contact information. You agree that the information you provide to us is accurate and that you will keep it accurate and up-to-date at all times. When you register, you will be asked to provide a password. You are solely responsible for maintaining the confidentiality of your account and password, and you accept responsibility for all activities that occur under your account. If you believe that your account is no longer secure, then you must immediately notify us at <SmartLink unstyled href={`mailto:${schema.email}`}>{schema.email}</SmartLink>.
        </Text>
        <Heading as="h2">
          General Payment Terms
        </Heading>
        <Text variant="body-default-m">
          Purchase of any Product through the Service may require you to pay fees. Before you pay any fees, you will have an opportunity to review and accept the fees that you will be charged. All fees are in U.S. Dollars.
        </Text>
        <Heading as="h3">
          Price
        </Heading>
        <Text variant="body-default-m">
          Creator reserves the right to determine pricing for all Products and Memberships. Creator will make reasonable efforts to keep pricing information published on the website up to date. We encourage you to check our website periodically for current pricing information. Creator may change the fees for any Product or Membership if the Creator gives you advance notice of changes before they apply. Creator, at its sole discretion, may make promotional offers with different features and different pricing to any of the Creator's customers. These promotional offers, unless made to you, will not apply to your offer or these Terms.
        </Text>
        <Heading as="h3">
          Authorization
        </Heading>
        <Text variant="body-default-m">
          You authorize the Creator and its third party payment processors to charge all sums for the Products you purchase and Memberships you subscribe to, including all applicable taxes, to the payment method specified in your account. If you pay any fees with a credit card, Creator or its third party payment processors may seek pre-authorization of your credit card account prior to your purchase to verify that the credit card is valid and has the necessary funds or credit available to cover your purchase.
        </Text>
        <Heading as="h3">
          Memberships
        </Heading>
        <Text variant="body-default-m">
          Memberships may include automatically recurring payments for periodic charges.If you activate such a Membership, you authorize the Creator or its third party payment processors to periodically charge, on a going-forward basis and until cancellation of either the recurring payments or the applicable Membership, all accrued sums on or before the payment due date for the accrued sums. The“Membership Billing Date” is the date when you purchase the applicable Membership. Your account will be charged automatically on the Membership Billing Date all applicable fees and taxes for the next Membership period. The Membership will continue unless and until you cancel your Membership or we terminate it. You must cancel your Membership before it renews in order to avoid billing of the next periodic Membership Fee to your account.Creator or its third party payment processor will bill the periodic Membership Fee to the payment method you provide to us during registration (or to a different payment method if you change your payment information). You may cancel the Membership by accessing the Billing tab in your profile within the site or by contacting us at: <SmartLink unstyled href={`mailto:${schema.email}`}>{schema.email}</SmartLink>.
        </Text>
        <Heading as="h3">
          Returns and Refunds
        </Heading>
        <Text variant="body-default-m">
          We will accept all returns for defective Products made within 30 days of the purchase date (“Returns”). We will issue you a full refund for all Returns and will pay for the return shipping of any Return if such shipping is required. We will not accept any returns of, nor issue any refunds for, any Products that are not defective.
        </Text>
        <Heading as="h2">
          Shipping and Delivery
        </Heading>
        <Text variant="body-default-m">
          All Products purchased through the Service will be shipped according to the terms provided at the time of purchase to the shipping address you provide to us. You will be responsible for all shipping costs, which will be specified for you at checkout.
        </Text>
        <Heading as="h2">
          Licenses
        </Heading>
        <Heading as="h3">
          Limited License
        </Heading>
        <Text variant="body-default-m">
          Subject to your complete and ongoing compliance with these Terms, Creator grants you, solely for your personal, non-commercial use, a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Service and any Memberships to which you have subscribed during the term of your subscription.
        </Text>
        <Heading as="h3">
          License Restrictions
        </Heading>
        <Text variant="body-default-m">
          Except and solely to the extent such a restriction is impermissible under applicable law, you may not: (a) reproduce, distribute, publicly display, or publicly perform the Service; (b) make modifications to the Service; or (c) interfere with or circumvent any feature of the Service, including any security or access control mechanism. If you are prohibited under applicable law from using the Service, you may not use it.
        </Text>
        <Heading as="h3">
          Feedback
        </Heading>
        <Text variant="body-default-m">
          If you choose to provide input and suggestions regarding problems with or proposed modifications or improvements to the Service or any Products (“Feedback”), then you hereby grant Creator an unrestricted, perpetual, irrevocable, non-exclusive, fully-paid, royalty-free right to exploit the Feedback in any manner and for any purpose, including to improve the Service and create other products and services.
        </Text>
        <Heading as="h2">
          Ownership; Proprietary Rights
        </Heading>
        <Text variant="body-default-m">
          The Service is owned and operated by the Creator. The visual interfaces, graphics, design, compilation, information, data, computer code (including source code or object code), products, software, services, and all other elements of the Service and Products (“Materials”) provided by the Creator are protected by intellectual property and other laws. All Materials included in the Service are the property of Creator or its third party licensors. Except as expressly authorized by the Creator, you may not make use of the Materials. Creator reserves all rights to the Materials not granted expressly in these Terms.
        </Text>
        <Heading as="h2">
          Prohibited Conduct: By using the service, you agree not to:
        </Heading>
        <ul>
          <li>
            Use the Service for any illegal purpose or in violation of any local, state, national, or international law;
          </li>
          <li>
            Violate, or encourage others to violate, any right of a third party, including by infringing or misappropriating any third party intellectual property right;
          </li>
          <li>
            Interfere with security-related features of the Service, including by: (i) disabling or circumventing features that prevent or limit use or copying of any content; or (ii) reverse engineering or otherwise attempting to discover the sourcecode of any portion of the Service except to the extent that the activity is expressly permitted by applicable law;
          </li>
          <li>
            Interfere with the operation of the Service or any user’s enjoyment of the Service, including by: (i) uploading or otherwise disseminating any virus, adware, spyware, worm, or other malicious code; (ii) making any unsolicited offer or advertisement to another user of the Service; (iii) collecting personal information about another user or third party without consent; or (iv) interfering with or disrupting any network, equipment, or server connected to or used to provide the Service;
          </li>
          <li>
            Perform any fraudulent activity including impersonating any person or entity, claiming a false affiliation, accessing any other Service account without permission, or falsifying your age or date of birth;
          </li>
          <li>
            Sell or otherwise transfer the access granted under these Terms or any Materials (as defined in Section 6) or any right or ability to view, access, or use any Materials; or
          </li>
          <li>
            Attempt to do any of the acts described in this Section 7 or assist or permit any person in engaging in any of the acts described in this Section 7.
          </li>
        </ul>
        <Heading as="h2">
          Modification of these Terms
        </Heading>
        <Text variant="body-default-m">
          We reserve the right to change these Terms on a going-forward basis at any time. any provision of these Terms, your authorization to access the Service and these Terms automatically terminate. In addition, Creator or Fourthwall may, at either of their sole discretion, terminate these Terms or your account on the Service, or suspend or terminate your access to the Service, at any time for any reason or no reason, with or without notice. You may terminate your account and these Terms at any time by contacting customer service at <SmartLink unstyled href={`mailto:${schema.email}`}>{schema.email}</SmartLink>.
        </Text>
        <Heading as="h2">
          Effect of Termination
        </Heading>
        <Text variant="body-default-m">
          Upon termination of these Terms: (a) your license rights will terminate and you must immediately cease all use of the Service; (b) you will no longer be authorized to access your account or theService; (c) you must pay Creator any unpaid amount that was due prior to termination; and (d) all payment obligations accrued prior to termination and Sections 5.3, 6, 9.3, 10, 11, 12, and 13 will survive.
        </Text>
        <Heading as="h2">
          Modification of the Service
        </Heading>
        <Text variant="body-default-m">
          Creator reserves the right to modify or discontinue the Service at any time (including by limiting or discontinuing certain features of the Service), temporarily or permanently, without notice to you. Creator will have no liability for any change to the Service or any suspension or termination of your access to or use of the Service.
        </Text>
        <Heading as="h2">
          Indemnity
        </Heading>
        <Text variant="body-default-m">
          To the fullest extent permitted by law, you are responsible for your use of the Service, and you will defend and indemnify Creator and its officers, directors, employees, consultants, affiliates, subsidiaries and agents and Fourthwall (together,the “Creator Entities”) from and against every claim brought by a third party, and any related liability, damage, loss, and expense, including reasonable attorneys’ fees and costs, arising out of or connected with: (a) your unauthorized use of, or misuse of, the Service; (b) your violation of any portion of these Terms, any representation, warranty, or agreement referenced in these Terms, or any applicable law or regulation; (c) your violation of any third party right, including any intellectual property right or publicity, confidentiality, other property, or privacy right; or (d) any dispute or issue between you and any third party. We reserve the right, atour own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you (without limiting your indemnification obligations with respect to that matter), and in that case, you agree to cooperate with our defense of those claims.
        </Text>
        <Heading as="h2">
          Disclaimers; No Warranties
        </Heading>
        <Text variant="body-default-m">
          THE SERVICE AND ALL MATERIALS AND CONTENT AVAILABLE THROUGH THE SERVICE ARE PROVIDED “AS IS” AND ON AN“AS AVAILABLE” BASIS. Creator DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, RELATING TO THE SERVICE AND ALL MATERIALS AND CONTENT AVAILABLE THROUGH THE SERVICE, INCLUDING: (A) ANY IMPLIED
        </Text>
        <Text variant="body-default-m">
          NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THE SERVICE OR Creator ENTITIES OR ANY MATERIALS OR CONTENT AVAILABLE THROUGH THE SERVICE WILL CREATE ANY WARRANTY REGARDING ANY OF THE Creator ENTITIES OR THE SERVICE THAT IS NOT EXPRESSLY STATED IN THESE TERMS. WE ARE NOT RESPONSIBLE FOR ANY DAMAGE THAT MAY RESULT FROM THE SERVICE AND YOUR DEALING WITH ANY OTHER SERVICE USER. YOU UNDERSTAND AND AGREE THAT YOU USE ANY PORTION OF THE SERVICE AT YOUR OWN DISCRETION AND RISK, AND THAT WE ARE NOT RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY (INCLUDING YOUR COMPUTER SYSTEM OR MOBILE DEVICE USED IN CONNECTION WITH THE SERVICE) OR ANY LOSS OF DATA, INCLUDING USER CONTENT.
        </Text>
        <Text variant="body-default-m">
          WE PROVIDE THE SERVICES THROUGH FOURTHWALL BUT THESE TERMS AND ANY PURCHASES OF PRODUCTS ARE SOLELY BETWEEN YOU AND Creator. YOU HEREBY ACKNOWLEDGE THAT FOURTHWALL IS NOT A PARTY TO, AND WILL HAVE NO LIABILITY RESULTING FROM, THESE TERMS, ANY DAMAGES OR LOSSES YOU INCUR AS A RESULT OF USING THE SERVICE, OR THE PURCHASE OF PRODUCTS.
        </Text>
        <Text variant="body-default-m">
          THE LIMITATIONS
        </Text>
        <Text variant="body-default-m">
          IN THIS SECTION 12 WILL APPLY EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
        </Text>
        <Heading as="h2">
          Miscellaneous
        </Heading>
        <Heading as="h3">
          General Terms
        </Heading>
        <Text variant="body-default-m">
          These Terms, together with the <SmartLink unstyled href="/privacy">Privacy Policy</SmartLink> and any other agreements expressly incorporated by reference into these Terms, are the entire and exclusive understanding and agreement between you and Creator regarding your use of the Service. You may not assign or transfer these Terms or your rights under these Terms, in whole or in part,by operation of law or otherwise, without our prior written consent. We may assign these Terms at any time without notice or consent. The failure to require performance of any provision will not affect our right to require performance at any other time after that, nor will a waiver by us of any breach or default of these Terms, or any provision of these Terms, be a waiver of any subsequent breach or default or a waiver of the provision itself. Use of section headers in these Terms is for convenience only and will not have any impact on the interpretation of any provision. Through out these Terms the use of the word “including” means “including but not limited to”. If any part of these Terms is held to be invalid or unenforceable, the unenforceable part will be given effect to the greatest extent possible, and the remaining parts will remain in full force and effect.
        </Text>
        <Heading as="h3">
          Governing Law
        </Heading>
        <Text variant="body-default-m">
          These Terms are governed by the laws of the State of California without regard to conflict of law principles. You and Creator submit to the personal and exclusive jurisdiction of the state courts and federal courts located within San Francisco County, California for resolution of any lawsuit or court proceeding permitted under these Terms.
        </Text>
        <Heading as="h3">
          Privacy Policy
        </Heading>
        <Text variant="body-default-m">
          Please read the Creator <SmartLink unstyled href="/privacy">Privacy Policy</SmartLink> carefully for information relating to our collection, use, storage, disclosure of your personal information. The Creator Privacy Policy is incorporated by this reference into, and made a part of, these Terms.
        </Text>
        <Heading as="h3">
          Additional Terms
        </Heading>
        <Text variant="body-default-m">
          Your use of the Service is subject to all additional terms, policies, rules, or guidelines applicable to the Service or certain features of the Service that we may post on or link to from the Service (the “Additional Terms”). All Additional Terms are incorporated by this reference into, and made a part of, these Terms.
        </Text>
        <Heading as="h3">
          Consent to Electronic Communications
        </Heading>
        <Text variant="body-default-m">
          By using the Service, you consent to receiving certain electronic communications from us as further described in our Privacy Policy. Please read our <SmartLink unstyled href="/privacy">Privacy Policy</SmartLink> to learn more about our electronic communications practices. You agree that any notices, agreements, disclosures, or other communications that we send to you electronically will satisfy any legal communication requirements, including that those communications be in writing.
        </Text>
        <Heading as="h3">
          Contact Information
        </Heading>
        <Text variant="body-default-m">
          The Service is offered by {schema.name}. You may contact us by sending correspondence by emailing us at <SmartLink unstyled href={`mailto:${schema.email}`}>{schema.email}</SmartLink>.
        </Text>
        <Heading as="h3">
          Notice to California Residents
        </Heading>
        <Text variant="body-default-m">
          If you are a California resident, under California Civil Code Section 1789.3, you may contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 N. Market Blvd., Suite S-202, Sacramento, California 95834, or by telephone at (800) 952-5210 in order to resolve a complaint regarding the Service or to receive further information regarding use of the Service.
        </Text>
        <Heading as="h3">
          No Support
        </Heading>
        <Text variant="body-default-m">
          We are under no obligation to provide support for the Service. In instances where we may offer support, the support will be subject to published policies.
        </Text>
        <Heading as="h3">
          International Use
        </Heading>
        <Text variant="body-default-m">
          The Service is intended for visitors located within the United States. We make no representation that the Service is appropriate or available for use outside of the United States. Access to the Service from countries or territories or by individuals where such access is illegal is prohibited.
        </Text>
      </Column>
    </Wrapper>
    )
}