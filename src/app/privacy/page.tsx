import { getCartId } from "@/components/cart/actions";
import { Wrapper } from "@/components/wrapper";
import { getCart } from "@/lib/fourthwall";
import { schema } from "@/resources/once-ui.config";
import { Column, Flex, Heading, SmartLink, Text } from "@once-ui-system/core";

type Props = {
  searchParams?: Promise<{ currency?: string }>;
}

export async function generateMetadata() {
  return {
    title: "Privacy Policy",
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
          Privacy Policy
        </Heading>
        <Text variant="body-default-m">
          Last Updated: Aug 5, 2024
        </Text>
      </Column>
      <Text variant="body-default-m">
        This privacy policy (this “Privacy Policy”) describes the practices of Dopler Store (“Dopler Store,” “we,” “our,” and “us”) with respect to the Personal Information we collect from or about you when you use our websites or services (collectively, the “Services”).
      </Text>
      <Heading as="h2">
        What information do we collect?
      </Heading>
      <Heading as="h3">
        Personal information you provide:
      </Heading>
      <Text variant="body-default-m">
        We collect certain Personal Information you provide to us through:
      </Text>
      <ul>
        <li>
          Your access or use of the Services;
        </li>
        <li>
          Your electronic communications with us, such as when you inquire about the Services, including in regard to the merchandise and other products available through our website;
        </li>
        <li>
          Your subscription to our newsletters or updates;
        </li>
        <li>
          Your registration for membership offerings available through the Services; and
        </li>
        <li>
          Your offline communications with us, such as in-person communications.
        </li>
      </ul>
      <Text variant="body-default-m">
        The Personal Information we collect when you provide it directly to us may include, but is not limited to, the following types of information:
      </Text>
      <ul>
        <li>
          Account Information: When you create an account with us, we will collect information associated with your account, including, to the extent applicable, your name, contact information, account credentials, payment card information, and transaction history.
        </li>
        <li>
          Purchase/Registration Information: When you make a purchase or attempt to make a purchase using the Services, we collect your name, email address, shipping address, and phone number.
        </li>
        <li>
          Financial Information: When you make a purchase using the Services, the vendors we use to process your payment may collect the payment information you are required to provide when making such purchase, as well as certain government identifier information for fraud purposes and other purposes permissible under applicable law.
        </li>
        <li>
          Transaction Information: When you make a purchase using the Services, we collect information about the transaction, such as the purchase amount, product purchased, and date of purchase.
        </li>
        <li>
          Communications: When you communicate with us, we collect your name, contact information, and the content of your any messages you send us.
        </li>
        <li>
          You are not required to provide any information to us, but some features of the Services may not be accessible to you unless you provide certain information.
        </li>
      </ul>
      <Heading as="h3">
        Personal information you automatically provide when you use the Services:
      </Heading>
      <Text variant="body-default-m">
        We or certain of our vendors may collect the following Personal Information that you automatically provide when you use or interact with the Services:
      </Text>
      <ul>
        <li>
          Log Data: We may collect information that your browser or device automatically sends us when you interact with the Services, such as your IP address, your browser type and settings, and the date and time of your interaction with the Services. Certain of our vendors may collect this information on our behalf.
        </li>
        <li>
          Usage Data: We may collect information about the way you use the Services, such as the frequency of your use, the types of content that you view or engage with, the actions you take, and ways in which you navigate the Services. Certain of our vendors may collect this information on our behalf.
        </li>
        <li>
          Device Information: We may collect information about the device you use to interact with the Services, such as the name of the device, the device’s unique identifiers (e.g., IDFA or Android ID), and its operating system. Certain of our vendors may collect this information on our behalf.
        </li>
        <li>
          Location Information: We may collect information about your general location that we infer from your IP address. Certain of our vendors may collect this information on our behalf.
        </li>
        <li>
          Cookies, other Tracking Technologies and Analytics: We and those of our vendors that provide us online analytics products may use cookies, clear GIFs, pixel tags, and other tracking technologies to collect information about your interactions with the Services and about the computers and devices (including mobile devices) you use to access the Services. These technologies help us understand user behavior, personalize preferences, perform research and analytics, and improve the Services. With these technologies, for example, we or our vendors may be able to tailor the Services to your needs, save your password in password-protected areas, track the pages you visit, help us manage content, and compile statistics about usage of the Services. We or our vendors also may use certain of these technologies in emails we send to you and other users to help us track email response rates, identify when our emails are viewed, and track whether our emails are forwarded.
        </li>
      </ul>
      <Text variant="body-default-m">
        You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but your browser may allow you to modify your browser settings to decline cookies if you prefer. If you disable cookies, you may be prevented from taking full advantage of the Services, because the Services may not function properly. You can manage your consent for this website here.
      </Text>
      <Heading as="h3">
        Personal information we receive from third parties:
      </Heading>
      <Text variant="body-default-m">
        We may also collect Personal Information when it is provided to us by the vendors we use in connection with providing you the Services. We may combine the Personal Information you provide us, either directly or automatically, when you use or interact with the Services, with the Personal Information we obtain from such third parties.
      </Text>
      <Heading as="h2">
        How do we use Personal Information?
      </Heading>
      <Text variant="body-default-m">
        We use Personal Information for the following purposes:
      </Text>
      <ul>
        <li>
          To provide, maintain, improve, and enhance the Services;
        </li>
        <li>
          To communicate with you, provide you with updates and other information related to the Services, provide information that you request, respond to comments and questions, and otherwise provide support;
        </li>
        <li>
          To understand and analyze how you use the Services and to develop new products, services, and features;
        </li>
        <li>
          To investigate and prevent fraud, and respond to trust and safety issues that may arise;
        </li>
        <li>
          To process transactions with you;
        </li>
        <li>
          To protect the safety and integrity of our users, employees, other parties, members of the public, and the Services;
        </li>
        <li>
          For marketing purposes;
        </li>
        <li>
          To conduct analysis and develop insights that enable us to operate, protect, make informed decisions, and report on our business;
        </li>
        <li>
          For compliance purposes, including enforcing our legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency; and
        </li>
        <li>
          For any other purpose for which we provide notice to you.
        </li>
      </ul>
      <Text variant="body-default-m">
        Aggregated or De-Identified Information: We may aggregate or de-identify Personal Information so that it can no longer be used to identify you. We may use aggregated or de-identified information for any purpose, including, without limitation, to improve and add features to the Services, to conduct research and for other similar purposes. We may also share aggregated or de-identified information with third parties, including without limitation, advertisers, promotional partners, sponsors and event promoters. We may collect aggregated or de-identified information through the Services, through cookies, and through other means described in this Privacy Policy. We will maintain and use aggregated or de-identified information in anonymous or de-identified form, and we will not attempt to reidentify the information, unless required by law.
      </Text>
      <Heading as="h2">
        Disclosure of Personal Information
      </Heading>
      <Text variant="body-default-m">
        We may disclose Personal Information to the following third parties or in the following circumstances without providing further notice to you:
      </Text>
      <ul>
        <li>
          Affiliates: We may disclose Person Information to our affiliated entities, including our subsidiaries.
        </li>
        <li>
          Vendors and other Service Providers: We may disclose Person Information to vendors and independent contractors who perform services on our behalf, including Fourthwall, Inc., a Delaware corporation, the vendor that assists us in providing our website and ecommerce solutions to you. Our vendors and independent contractors provide such services as: data storage, analytics, billing, marketing, product content and features, customer service, data storage, security, fraud prevention, and legal services.
        </li>
        <li>
          Safety and Protection of Us and Others: We may disclose Person Information to appropriate third parties if we believe in good faith that doing so is necessary or appropriate to protect or defend the rights, safety, or property of us or other parties, including to defend or enforce this Privacy Policy or any other contractual arrangement between you and us.
        </li>
        <li>
          Legal Requirements: We may disclose Person Information to government authorities or other third parties if we believe in good faith that doing so is necessary or appropriate to comply with any law enforcement, legal, or regulatory process, such as to respond to a warrant, subpoena, court order, or other applicable laws and regulations.
        </li>
        <li>
          Business Transfers: We may disclose Person Information to counterparties or their service providers in any strategic transaction, reorganization, bankruptcy, receivership, or transition of service to another provider in connection with the diligence process for any such transaction.
        </li>
        <li>
          Consent/At Your Direction: We may disclose Personal Information to nonaffiliated third parties if you give us consent to do so.
        </li>
      </ul>
      <Heading as="h2">
        Online Analytics and Tailored Advertising
      </Heading>
      <Heading as="h3">
        Online Analytics:
      </Heading>
      <Text variant="body-default-m">
        The Services may use third-party web analytics services, such as those of Google Analytics. These vendors use the sort of technology described in the “Personal information you automatically provide when you use the Services” section above to help us analyze how you use the Services, including by noting the third-party website from which you arrive. The information collected by this technology will be disclosed to or collected directly by these vendors, who use the information to evaluate your use of the Services. The Services also uses Google Analytics for certain purposes related to advertising, as described in the following section. To prevent Google Analytics from using your information for analytics, you may install the Google Analytics Opt-Out Browser Add-on.
      </Text>
      <Heading as="h3">
        Tailored Advertising:
      </Heading>
      <Text variant="body-default-m">
        The Services also makes use of third-party advertising technologies to place cookies or other tracking technologies on your computer, mobile phone, or other device to collect information about your use of the Services in order to (a) inform, optimize, and serve marketing content based on past visits to our websites and other sites and (b) report how marketing content impressions and interactions with these marketing impressions are related to visits to our websites. The Services also allows other unaffiliated parties (e.g., ad networks and ad servers such as Google Analytics) to serve tailored marketing to you and to access their own cookies or other tracking technologies on your computer, mobile phone, or other device you use to access the Services. Those parties that use these technologies may offer you a way to opt out of targeted advertising, as described below. You may receive tailored advertising on your computer through a web browser. Cookies may be associated with de-identified data linked to or derived from data you voluntarily have submitted to the Services (e.g., your email address) that may be disclosed to a vendor in hashed, non-human-readable form.
      </Text>
      <Text variant="body-default-m">
        If you are interested in more information about tailored browser advertising and how you can generally control cookies from being put on your computer to deliver tailored marketing, you may visit the <SmartLink unstyled href="https://optout.aboutads.info/?c=2&lang=EN">Network Advertising Initiative’s (“NAI”) Consumer Opt-Out Link</SmartLink>, the <SmartLink unstyled href="http://www.aboutads.info/choices">Digital Advertising Alliance’s (“DAA”) Consumer Opt-Out Link</SmartLink>, and/or the <SmartLink unstyled href="http://youronlinechoices.eu/">European Interactive Digital Advertising Alliance</SmartLink> to opt-out of receiving tailored advertising from companies that participate in those programs. To opt out of Google Analytics for Display Advertising or customize Google Display Network ads, you can visit the <SmartLink unstyled href="https://www.google.com/settings/ads">Google Ads Settings page</SmartLink>. Please note that to the extent advertising technology is integrated into the Services, you may still receive advertising content even if you opt out of tailored advertising. In that case, the advertising content may not be tailored to your interests. Also, we do not control any of the above opt-out links and are not responsible for any choices you make using these mechanisms or the continued availability or accuracy of these mechanisms. If your browsers are configured to reject cookies when you visit these opt-out pages, or you subsequently erase your cookies, use a different computer or change web browsers, your opt-out may no longer be effective.
      </Text>
      <Heading as="h2">
        What are your rights with respect to your Personal Information?
      </Heading>
      <Text variant="body-default-m">
        Depending on your location, and to the extent the applicable data privacy laws of that jurisdiction apply to our collection of Personal Information as described in this Privacy Policy, you may have certain rights regarding with respect to the Personal Information we collect, including:
      </Text>
      <ul>
        <li>
          The right to access your Personal Information;
        </li>
        <li>
          The right to receive information about how we process your Personal Information;
        </li>
        <li>
          The right to correct inaccurate Personal Information;
        </li>
        <li>
          The right to delete Personal Information;
        </li>
        <li>
          The right to transfer your Personal Information to a third party;
        </li>
        <li>
          The right to restrict how we process your Personal Information;
        </li>
        <li>
          The right to object to how we process your Personal Information; and
        </li>
        <li>
          The right to lodge a complaint with your local data protection authority.
        </li>
      </ul>
      <Text variant="body-default-m">
        The exact scope of these rights depends on your location, and whether we are subject to the applicable data privacy laws of such jurisdiction. To learn more about your rights or to exercise them, please contact us at <SmartLink unstyled href={`mailto:${schema.email}`}>{schema.email}</SmartLink>. We may request you provide us with information necessary to confirm your identity before responding to your request.
      </Text>
      <Heading as="h2">
        Residents of the European Economic Area and United Kingdom
      </Heading>
      <Text variant="body-default-m">
        {schema.name} is considered the “data controller” of the personal data we handle under this Privacy Policy. In other words, we are responsible for deciding how to collect, use and disclose this data, subject to applicable law. The laws of some jurisdictions such as the laws of the European Economic Area and the United Kingdom require data controllers to tell you about the legal grounds they rely on for using or disclosing of your Personal Information. To the extent those laws apply, our legal grounds are as follows:
      </Text>
      <ul>
        <li>
          Contractual Necessity: We may use or disclose Personal Information to honor our contractual commitments to you. For example, we will process your Personal Information to comply with our agreements with you, and to honor our commitments in any contracts that we have with you.
        </li>
        <li>
          With Your Consent: Where required by law, and in some other cases, we use or disclose Personal Information on the basis of your consent. You may withdraw any consent you previously provided to us regarding the processing of your Personal Information, at any time and free of charge. We will apply your preferences going forward and this will not affect the lawfulness of the processing that occurred before you withdrew your consent.
        </li>
        <li>
          Legitimate Interests: In many cases, we use or disclose Personal Information on the grounds that it furthers our legitimate business interests in ways that are not overridden by the interests or fundamental rights and freedoms of the affected individuals, such as in connection with providing customer service, offering or providing certain promotional activities, analyzing and improving our business, providing security for the Services, preventing fraud, and managing legal issues.
        </li>
        <li>
          Legal Compliance: We need to use and disclose Personal Information in certain ways to comply with our legal obligations, such as to comply with tax and accounting obligations.
        </li>
      </ul>
      <Heading as="h2">
        Residents of California
      </Heading>
      <Text variant="body-default-m">
        The California Consumer Privacy Act of 2018, as amended by the California Privacy Rights Act of 2020 (“CCPA”) may require us to provide additional information to California residents. This section only applies to you if you are a California resident, and only to the extent we are subject to the requirements of the CCPA. In this section, where we use a term in “quotes,” that term shall have the meaning ascribed to it in the CCPA.
      </Text>
      <Heading as="h3">
        Categories of Personal Information we collect:
      </Heading>
      <Text variant="body-default-m">
        Section 1 of this Privacy Policy describes the information we collect from and about you, Section 2 of this Privacy Policy describes the purposes for which we use such information, and Section 3 of this Privacy Policy describes when and to whom we disclose such information. The CCPA requires us to list the Personal Information we collect by category along with the purposes of its use and the unaffiliated parties to which it is disclosed.
      </Text>
      <Flex fillWidth textVariant="label-default-s">
      <table border={1} cellPadding={12} style={{borderSpacing: "0", borderColor: "var(--neutral-alpha-strong)"}}>
        <thead>
        <tr>
            <th>
              <Text variant="label-default-m" onBackground="neutral-strong" align="left" as="div">
                Categories of information (see Section 1 above for more information)
              </Text>
            </th>
            <th>
              <Text variant="label-default-m" onBackground="neutral-strong" align="left" as="div">
                Purpose of use
              </Text>
            </th>
            <th>
              <Text variant="label-default-m" onBackground="neutral-strong" align="left" as="div">
                Categories of other parties to whom we disclose the information for business and operational purposes (see Section 3 above for more information)
              </Text>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Identifiers such as name, email address, and personal information described in California Civil Code Section 1798.80</td>
            <td>
                <ul>
                    <li>Provide the Services;</li>
                    <li>Communicate with you, including to send you emails about our products and Services, provide support, and respond to your questions;</li>
                    <li>Analyze, develop, or improve the Services or any other products and services we provide;</li>
                    <li>Process transactions;</li>
                    <li>Comply with our legal obligations and as permitted by law;</li>
                    <li>Protect the safety and/or integrity of our users, employees, third parties, members of the public, and/or our Services;</li>
                    <li>Conduct analysis and develop insights that enable us to operate, protect, make informed decisions and report on our business;</li>
                    <li>Prevent fraud and enforce our terms; and</li>
                    <li>Marketing and advertising.</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Affiliates and subsidiaries;</li>
                    <li>Vendors and service providers;</li>
                    <li>Advertising partners;</li>
                    <li>Entities for legal and security purposes;</li>
                    <li>Entities for sales or transfer of business or assets; and</li>
                    <li>Others with your consent.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Internet network and device activity data such as information about your device hardware (e.g., device type) and software (e.g., operating system and browser type) and browsing and usage information (e.g., how often you visit our Services, the pages you visit, referring pages, and the version of the Services you’re using)</td>
            <td>All the same purposes for which we may use Identifiers (see above)</td>
            <td>
                <ul>
                    <li>Affiliates and subsidiaries;</li>
                    <li>Vendors and service providers;</li>
                    <li>Advertising partners;</li>
                    <li>Entities for legal and security purposes;</li>
                    <li>Entities for sales or transfer of business or assets; and</li>
                    <li>Others with your consent.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Financial information such as credit card or other payment information stored by our payment processors on our behalf</td>
            <td>
                <ul>
                    <li>Provide the Services;</li>
                    <li>Process transactions;</li>
                    <li>Comply with our legal obligations and as permitted by law;</li>
                    <li>Protect the safety and/or integrity of our users, employees, third parties, members of the public, and/or our Services;</li>
                    <li>Prevent fraud and enforce our terms;</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Service providers for payment processing purposes; and</li>
                    <li>Entities for legal and security purposes.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Commercial information such as information about your transactions with us, for example, products or services you have purchased</td>
            <td>All the same purposes for which we may use Identifiers (see above)</td>
            <td>
                <ul>
                    <li>Affiliates and subsidiaries;</li>
                    <li>Vendors and service providers;</li>
                    <li>Advertising partners;</li>
                    <li>Entities for legal and security purposes;</li>
                    <li>Entities for sales or transfer of business or assets; and</li>
                    <li>Others with your consent.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Audio or visual information such as when you call customer support (if applicable)</td>
            <td>All the same purposes for which we may use Identifiers (see above)</td>
            <td>
                <ul>
                    <li>Affiliates and subsidiaries;</li>
                    <li>Vendors and service providers;</li>
                    <li>Entities for legal and security purposes;</li>
                    <li>Entities for sales or transfer of business or assets; and</li>
                    <li>Others with your consent.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Other information any other information you provide to us that directly or indirectly identifies you, such as information you include in emails or other communications to us</td>
            <td>Purposes of use will depend on the additional information you provide.</td>
            <td>Disclosure will depend on the additional information you provide.</td>
        </tr>
        </tbody>
    </table>
    </Flex>
    <Text variant="body-default-m">
      We also collect “sensitive personal information,” as that term is defined in the CCPA. We collect the following category of “sensitive personal information”: account log-in and password or other credentials in connection with creating your account to access the Services.
    </Text>
    <Text variant="body-default-m">
      We collect the categories of Personal Information identified above from the following sources: (1) directly from you; (2) through your use of the Services; (3) from affiliates or vendors or service providers; and (4) from other parties such as marketers and other users.
    </Text>
    <Heading as="h3">
      Notice of financial incentives:
    </Heading>
    <Text variant="body-default-m">
      We may provide certain incentives, such as discounts for referrals. You can opt into the incentives by providing us with the information requested or as otherwise described in the Services. We collect Personal Information as described in the incentive, such as your email address. Your participation in any incentive is completely voluntary, and you have a right to withdraw from such incentive at any time. If you decide you don’t want to participate in an incentive, you can refrain from taking the requested actions.
    </Text>
    <Text variant="body-default-m">
      The specific reward or incentive offered, if any, will be made available to you on the Services. The monetary value of the reward or incentive is a reasonable approximation of the monetary value of the Personal Information to us in connection with participating in the incentive. We arrived at this conclusion based on consideration of multiple factors, including the following: (1) the revenue we generate from referrals; and (2) the expenses we incur in operating the incentive program.
    </Text>
    <Heading as="h3">
      Your CCPA rights:
    </Heading>
    <Text variant="body-default-m">
      If you are a California resident, then to the extent the requirements of the CCPA apply to our collection of your Personal Information, the CCPA may permit you to request that we:
    </Text>
    <ul>
      <li>
        Provide you the categories of Personal Information we have collected or disclosed about you; the categories of sources of such information; the business or commercial purpose for collecting, “selling,” or “sharing” your personal information; the categories of third parties to whom we disclose or “sell,” or with whom we “share,” personal information; and the categories of personal information we “sell.”
      </li>
      <li>
        Provide access to and/or a copy of certain information we hold about you.
      </li>
      <li>
        Delete certain information we have about you.
      </li>
      <li>
        Correct inaccurate personal information that we maintain about you.
      </li>
    </ul>
    <Text variant="body-default-m">
      You also have the right to opt out of “sales” and “sharing” of personal information, as described below. You may have the right to receive information about the financial incentives that we offer to you, if any. You also have the right to not be discriminated against (as provided for in applicable law) for exercising certain of your rights. Certain information may be exempt from such requests under applicable law. We need certain types of information so that we can provide the Services to you. If you ask us to delete such information, you may no longer be able to access or use the Services.
    </Text>
    <Text variant="body-default-m">
      The CCPA also allows you to limit the use or disclosure of your “sensitive personal information” (as defined in the CCPA) if your sensitive personal information is used for certain purposes. Please note that we do not use or disclose sensitive personal information other than for purposes for which you cannot opt out under the CCPA.
    </Text>
    <Text variant="body-default-m">
      If would like to exercise any of these rights, please submit a request to us at <SmartLink unstyled href={`mailto:${schema.email}`}>{schema.email}</SmartLink> or contact us at this toll-free number: 1-833-484-9255. You will be required to verify your identity before we fulfill your request, and we may request additional information from you in order to do this. You can also designate an authorized agent to make a request on your behalf. To do so, you must provide us with written authorization or a power of attorney, signed by you, for the agent to act on your behalf. You will still need to verify your identity directly with us.
    </Text>
    <Heading as="h3">
      “Sale” and “sharing” of personal information:
    </Heading>
    <Text variant="body-default-m">
      The CCPA sets forth certain obligations for businesses that “sell” or “share” personal information.
    </Text>
    <Text variant="body-default-m">
      We may disclose your personal information to third parties for purposes of analytics and advertising. We provide information to analytics providers to better understand how users use the Services so we can improve the Services and create new products and services. We may also provide personal information to third-party advertising providers for targeted advertising purposes, so we can provide you with more relevant and tailored ads regarding our services. Under the CCPA, disclosing personal information to these third parties may be considered a “sale” of personal information or the “sharing” of personal information for purposes of “cross-context behavioral advertising.”
    </Text>
    <Text variant="body-default-m">
      The following chart lists the categories of personal information we have sold or shared over the last 12 months, and the categories of third parties to whom we have sold or shared such personal information.
    </Text>
    <table border={1} cellPadding={12} style={{borderSpacing: "0", borderColor: "var(--neutral-alpha-strong)"}}>
      <thead>
      <tr>
          <th>
            <Text variant="label-default-m" onBackground="neutral-strong" align="left" as="div">
            Category of personal information
            </Text>
          </th>
          <th>
            <Text variant="label-default-m" onBackground="neutral-strong" align="left" as="div">
              Categories of Third Parties to Which we Have “Sold” this PI
            </Text>
          </th>
          <th>
            <Text variant="label-default-m" onBackground="neutral-strong" align="left" as="div">
              Categories of Third Parties to Which we Have “Shared” this PI
            </Text>
          </th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <td>Identifiers</td>
          <td>Advertising partners; analytics providers</td>
          <td>Advertising partners</td>
      </tr>
      <tr>
          <td>Commercial information</td>
          <td>Advertising partners; analytics providers</td>
          <td>Advertising partners</td>
      </tr>
      <tr>
          <td>Internet network and device activity data</td>
          <td>Advertising partners; analytics providers</td>
          <td>Advertising partners</td>
      </tr>
      </tbody>
    </table>
    <Text variant="body-default-m">
      To opt out of our disclosure of your personal information for purposes that could be considered “sales” or “sharing,” please send the request via email to <SmartLink unstyled href={`mailto:${schema.email}`}>{schema.email}</SmartLink>.
    </Text>
    <Text variant="body-default-m">
      Please note that we also respond to and abide by opt-out preference signals sent through the Global Privacy Control. Any opt out preferences you have exercised through these methods will only apply to the specific device/browser on which you made them. For more information on how to use the Global Privacy Control, see <SmartLink unstyled href="https://www.globalprivacycontrol.org/">www.globalprivacycontrol.org</SmartLink>.
    </Text>
    <Text variant="body-default-m">
      We do not knowingly “sell” or “share” the personal information of children under 16.
    </Text>
    <Heading as="h2">
      Retention of your personal information
    </Heading>
    <Text variant="body-default-m">
      Please see Section 9 below for our data retention practices.
    </Text>
    <Heading as="h2">
      Do Not Track
    </Heading>
    <Text variant="body-default-m">
      We do not respond to browser-initiated Do Not Track signals, as the Internet industry is currently still working on Do Not Track standards, implementations, and solutions. Please note that Do Not Track is a different privacy mechanism than the Global Privacy Control browser choice referenced above.
    </Text>
    <Heading as="h2">
      Shine the Light
    </Heading>
    <Text variant="body-default-m">
      Under California’s “Shine the Light” law, California residents may request certain information regarding our disclosure of your information to third parties for their direct marketing purposes. We do not disclose your information to third parties for their direct marketing purposes.
    </Text>
    <Heading as="h2">
      Children’s Privacy
    </Heading>
    <Text variant="body-default-m">
      We do not knowingly collect, maintain, or use Personal Information of children under 13 years of age, and no part of our Services are directed to children. If you learn that a child has provided us with Personal Information in violation of this Privacy Policy, then you may alert us at <SmartLink unstyled href={`mailto:${schema.email}`}>{schema.email}</SmartLink>.
    </Text>
    <Heading as="h2">
      Security
    </Heading>
    <Text variant="body-default-m">
      We protect your personal information by using physical and electronic safeguards designed to improve the security of the personal information we maintain. However, as no electronic transmission or storage of personal information can be entirely secure, we can make no guarantees as to the security or privacy of your personal information.
    </Text>
    <Heading as="h2">
      Retention
    </Heading>
    <Text variant="body-default-m">
      We keep your Personal Information for the time necessary for the purposes for which it is processed. The length of time for which we retain Personal Information depends on the purposes for which we collected and use it and your choices, after which time we may delete and/or aggregate it. We may also retain and use Personal Information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
    </Text>
    <Heading as="h2">
      Consent to Transfer
    </Heading>
    <Text variant="body-default-m">
      We may store and process Personal Information in the United States and other countries outside the United States which may have data protection laws that differ from the laws of your country. By using the Services, or providing us with any information, you consent to the collection, processing, maintenance, and transfer of such information in and to the United States and other applicable countries in which the privacy laws may not be as comprehensive as, or equivalent to, those in the country where you reside and/or are a citizen.
    </Text>
    <Heading as="h2">
      Third-Party Links and Services
    </Heading>
    <Text variant="body-default-m">
      The Services may contain links to other websites, products, or services that we do not own or operate. We are not responsible for the privacy practices of these third parties. Please be aware that this Privacy Policy does not apply to your activities on these third-party services or to any Personal Information you disclose to these third parties. We encourage you to read their privacy policies before providing any personal information to them.
    </Text>
    <Heading as="h2">
      Changes to this Privacy Policy
    </Heading>
    <Text variant="body-default-m">
      We may change this Privacy Policy to reflect changes in the law, our information practices or the features of the Services. We will indicate the date of the most recent update to the Privacy Policy at the beginning of the Privacy Policy. By continuing to use the Services, you are confirming that you have read and understood the latest version of this Privacy Policy.
    </Text>
    <Heading as="h2">
      Contact Us
    </Heading>
    <Text variant="body-default-m">
      If you have questions about this Privacy Policy, please contact us at <SmartLink unstyled href={`mailto:${schema.email}`}>{schema.email}</SmartLink>.
    </Text>
      </Column>
    </Wrapper>
    )
}