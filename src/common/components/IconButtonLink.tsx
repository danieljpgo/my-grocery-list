import * as React from 'react';
import NextLink from 'next/link';
import { UrlObject } from 'url';
import { IconButton } from '@chakra-ui/button';

type IconButtonLinkProps = {
  href: string | UrlObject;
  children: React.ReactElement;
  'arial-label': string;
};

export default function IconButtonLink(props: IconButtonLinkProps) {
  const { href, children, 'arial-label': arialLabel } = props;

  return (
    <NextLink href={href} passHref>
      <IconButton as="a" icon={children} aria-label={arialLabel} />
    </NextLink>
  );
}

// color={'cbPrimary.500'}
// _hover={{ color: 'cbPrimary.700' }}
// variant={'ghost'}
// title={'Edit this car'}
// size={'xs'}
