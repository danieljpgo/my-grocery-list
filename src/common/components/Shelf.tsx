import * as React from 'react';
import { HStack } from '@chakra-ui/layout';

type ShelfProps = {
  children: React.ReactNode;
  gap?: '6';
};

export default function Shelf({ children, gap }: ShelfProps) {
  return <HStack gridGap={gap}>{children}</HStack>;
}
