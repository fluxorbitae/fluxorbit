import { Column } from '@once-ui-system/core';
import type { FunctionComponent } from 'react';

interface TextProps {
  html: string;
  className?: string;
}

const Prose: FunctionComponent<TextProps> = ({ html }) => {
  return (
    <Column fillWidth gap="16"
      textVariant="body-default-m"
      dangerouslySetInnerHTML={{ __html: html as string }}
    />
  );
};

export default Prose;
