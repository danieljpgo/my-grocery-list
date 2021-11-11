import { ArrowBackIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/layout';
import * as React from 'react';
import { IconButtonLink, Title } from '.';

type HeaderProps = {
  children: string;
};

// @TODO fazer o header ser fixed
export default function Header({ children }: HeaderProps) {
  return (
    <Flex as="header" gridGap="6">
      <IconButtonLink arial-label="go back" href=".">
        <ArrowBackIcon />
      </IconButtonLink>
      <Title as="h1">{children}</Title>
    </Flex>
  );
}
