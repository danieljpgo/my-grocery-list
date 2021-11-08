import { Heading } from '@chakra-ui/react'

type TitleProps = {
  children: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function Title({ children, as }: TitleProps) {
  return (
    <Heading as={as}>
      {children}
    </Heading>
  )
}
