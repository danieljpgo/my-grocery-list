import * as React from 'react';
import { Container as ContainerChakra } from '@chakra-ui/react';

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
        backgroundColor: '#f1f1f1',
      }}
    >
      <ContainerChakra
        rounded="2xl"
        px="8"
        py="10"
        boxShadow="lg"
        as="main"
        style={{
          height: '100%',
          width: '100%',
          maxWidth: '480px',
          maxHeight: '720px',
          backgroundColor: 'white',
        }}
      >
        {children}
      </ContainerChakra>
    </div>
  );
}
