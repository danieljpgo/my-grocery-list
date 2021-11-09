import * as React from 'react';
import { Container as ContainerChakra } from '@chakra-ui/react';

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <ContainerChakra as="main">
      {children}
      {/* centerContent @TODO */}
    </ContainerChakra>
  );
}
