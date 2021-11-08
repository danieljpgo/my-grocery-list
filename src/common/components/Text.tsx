import { Text as TextChakra } from '@chakra-ui/react'

type TextProps = {
  children: string;
  as?: 'p' | 'span';
  truncated?: boolean;
}

export default function Text({ children, as = 'p', truncated }: TextProps) {
  return (
    <TextChakra as={as} isTruncated={truncated}>
      {children}
    </TextChakra>
  )
}
