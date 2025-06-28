"use client";

import { mailchimp } from "@/resources/once-ui.config";
import { Background, Button, Column, Flex, Heading, Input, Text } from "@once-ui-system/core";
import { forwardRef, ReactNode, useState } from "react";

interface MailchimpProps extends React.ComponentProps<typeof Flex> { }

export const Mailchimp  = forwardRef<HTMLDivElement, MailchimpProps>(
  (
    {
      ...rest
    },
    ref,
  ) => {
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const validateEmail = (value: ReactNode): ReactNode => {
    if (typeof value !== 'string') return 'Please enter a valid email';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email';
    }
    return null;
  };

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-medium"
      ref={ref}
      {...rest}
    >
		<Background
				position="absolute"
        left="0"
        top="0"
				mask={{
					x: 100,
					y: 0,
					radius: 150
				}}
				gradient={{
						display: true,
						x: 100,
						y: 20,
						tilt: -5,
						width: 100,
						height: 50,
						colorStart: "danger-solid-strong",
						colorEnd: "static-transparent"
				}}
		/>
		<Background
				position="absolute"
        left="0"
        top="0"
				gradient={{
						display: true,
						x: 50,
						y: 0,
						width: 75,
						height: 50,
						colorStart: "brand-background-strong",
						colorEnd: "static-transparent"
				}}
		/>
<Background
				position="absolute"
        left="0"
        top="0"
				mask={{
					x: 0,
					y: 0,
					radius: 150
				}}
				gradient={{
						display: true,
						x: 25,
						y: 0,
						tilt: -30,
						width: 100,
						height: 50,
						colorStart: "accent-solid-strong",
						colorEnd: "static-transparent"
				}}
		/>
		<Background
				position="absolute"
        left="0"
        top="0"
				mask={{
					x: 50,
					y: 0,
					radius: 100
				}}
				dots={{
          display: true,
          size: "2",
          color: "page-background",
          opacity: 100
				}}
		/>
      <Heading as="h2" style={{ position: "relative" }} marginBottom="s" variant="display-default-s">
        {mailchimp.title}
      </Heading>
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        variant="body-default-xl"
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {mailchimp.description}
      </Text>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        action={mailchimp.action}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
      >
        <Flex id="mc_embed_signup_scroll" fillWidth maxWidth={24} vertical="center" mobileDirection="column" gap="8">
          <Input
            formNoValidate
            id="mce-EMAIL"
            name="EMAIL"
            type="email"
            placeholder="Email"
            required
            validate={validateEmail}
            onChange={handleChange}
            value={email}
          />
          <div style={{ display: "none" }}>
            <input
              type="checkbox"
              readOnly
              name="group[3492][1]"
              id="mce-group[3492]-3492-0"
              value=""
              checked
            />
          </div>
          <div id="mce-responses" className="clearfalse">
            <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
            <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
          </div>
          <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
            <input
              type="text"
              readOnly
              name="b_c1a5a210340eb6c7bff33b2ba_0462d244aa"
              tabIndex={-1}
              value=""
            />
          </div>
          <div className="clear">
            <Flex height="48" vertical="center">
              <Button id="mc-embedded-subscribe" arrowIcon value="Subscribe" size="m" fillWidth>
                Subscribe
              </Button>
            </Flex>
          </div>
        </Flex>
      </form>
    </Column>
  );
});