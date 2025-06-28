'use client';

import { Button, Column, Heading, Text } from "@once-ui-system/core";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <Column fill center paddingY="160" paddingX="20" gap="24">
      <Heading align="center">Oh no!</Heading>
      <Text align="center" onBackground="neutral-medium">
        There was an issue with loading the store. This could be an issue with your network.
      </Text>
      <Button
        onClick={() => reset()}
      >
        Try Again
      </Button>
    </Column>
  );
}
