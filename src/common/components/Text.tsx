import { Text as TextChakra } from '@chakra-ui/react';

type TextProps = {
  children: string;
  as?: 'p' | 'span';
  bold?: boolean;
  truncated?: boolean;
};

export default function Text({ children, as = 'p', truncated, bold }: TextProps) {
  return (
    <TextChakra fontWeight={bold ? 'bold' : 'normal'} as={as} isTruncated={truncated}>
      {children}
    </TextChakra>
  );
}
