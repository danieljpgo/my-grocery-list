import * as React from 'react';
import { VStack } from '@chakra-ui/layout';

type StackProps = {
  children: React.ReactNode;
  gap?: '6' | 'space';
  fullHeight?: boolean;
};

export default function Stack({ children, gap, fullHeight }: StackProps) {
  return (
    <VStack alignItems={'normal'} gridGap={gap} height={fullHeight ? '100%' : undefined}>
      {children}
    </VStack>
  );
}
