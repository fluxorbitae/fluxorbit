import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema, Card, Media, Line, Icon } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export default function Home() {
  return (
    
  
    <Column maxWidth="m" gap="xl" margin="40" horizontal="center">
    <Projects range={[2,2]}/>
   
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth gap="m" align="center">
        <Column maxWidth="m">
         
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          
        </Column>
      </Column>
      
      {routes["/blog"] && (
        <Row>
  <Flex fillWidth horizontal="start" gap="32" overflowX="auto">
    {/* 1. Kart */}
    <Card
      radius="l-4"
      direction="column"
      border="neutral-alpha-medium"
      style={{ width: "400px", minWidth: "400px" }}
    >
      <Row fillWidth paddingX="20" paddingY="12" gap="8" vertical="center">
        
        <Text variant="label-default-s">Social Media Agency</Text>
      </Row>
      <Media
        border="neutral-alpha-weak"
        sizes="400px"
        fillWidth
        aspectRatio="4 / 3"
        radius="l"
        alt="Social Media"
        src="/social_media.jpg"
      />
      <Column fillWidth paddingX="20" paddingY="24" gap="8">
        <Text variant="body-default-xl">Instagram, X etc. platforms managing</Text>
        <Text onBackground="neutral-weak" variant="body-default-s">
          Lorem Ipsum
        </Text>
      </Column>
      <Line background="neutral-alpha-medium" />
      <Row paddingX="20" paddingY="12" gap="8" vertical="center" textVariant="label-default-s" onBackground="neutral-medium">
        <Icon name="like" size="s" onBackground="neutral-strong" /> 34
        <Icon name="chat" size="s" onBackground="neutral-strong" marginLeft="24" /> 5
      </Row>
    </Card>

    {/* Diğer kartları da aynı şekilde ekle */}
    {/* Kart 2 */}
    <Card
      radius="l-4"
      direction="column"
      border="neutral-alpha-medium"
      style={{ width: "400px", minWidth: "400px" }}
    >
      <Row fillWidth paddingX="20" paddingY="12" gap="8" vertical="center">
        
        <Text variant="label-default-s">OnlyFans Agency</Text>
      </Row>
      <Media
        border="neutral-alpha-weak"
        sizes="400px"
        fillWidth
        aspectRatio="4 / 3"
        radius="l"
        alt="OnlyFans"
        src="/onlyfans.jpg"
      />
      <Column fillWidth paddingX="20" paddingY="24" gap="8">
        <Text variant="body-default-xl">OnlyFans Managing Affiliate System</Text>
        <Text onBackground="neutral-weak" variant="body-default-s">
          Lorem Ipsum
        </Text>
      </Column>
      <Line background="neutral-alpha-medium" />
      <Row paddingX="20" paddingY="12" gap="8" vertical="center" textVariant="label-default-s" onBackground="neutral-medium">
        <Icon name="like" size="s" onBackground="neutral-strong" /> 34
        <Icon name="chat" size="s" onBackground="neutral-strong" marginLeft="24" /> 5
      </Row>
    </Card>

    {/* Kart 3 */}
    <Card
      radius="l-4"
      direction="column"
      border="neutral-alpha-medium"
      style={{ width: "400px", minWidth: "400px" }}
    >
      <Row fillWidth paddingX="20" paddingY="12" gap="8" vertical="center">
        
        <Text variant="label-default-s">Professional Photography</Text>
      </Row>
      <Media
        border="neutral-alpha-weak"
        sizes="400px"
        fillWidth
        aspectRatio="4 / 3"
        radius="l"
        alt="Photography"
        src="/photography.jpg"
      />
      <Column fillWidth paddingX="20" paddingY="24" gap="8">
        <Text variant="body-default-xl">We are taking a picture in our professional studio</Text>
        <Text onBackground="neutral-weak" variant="body-default-s">
          Lorem Ipsum
        </Text>
      </Column>
      <Line background="neutral-alpha-medium" />
      <Row paddingX="20" paddingY="12" gap="8" vertical="center" textVariant="label-default-s" onBackground="neutral-medium">
        <Icon name="like" size="s" onBackground="neutral-strong" /> 34
        <Icon name="chat" size="s" onBackground="neutral-strong" marginLeft="24" /> 5
      </Row>
    </Card>
  </Flex>
</Row>

      )}
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
