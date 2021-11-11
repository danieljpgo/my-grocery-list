import * as React from 'react';
import NextLink from 'next/link';
import { UrlObject } from 'url';
import { IconButton } from '@chakra-ui/button';

type IconButtonLinkProps = {
  href: string | UrlObject;
  size?: 'sm' | 'xl';
  disabled?: boolean;
  children: React.ReactElement;
  'arial-label': string;
};

export default function IconButtonLink(props: IconButtonLinkProps) {
  const { disabled, href, children, 'arial-label': arialLabel, size = 'sm' } = props;

  const sizeValue = size === 'xl' ? '36' : undefined;

  return (
    <NextLink href={href} passHref>
      <IconButton
        disabled={disabled}
        h={sizeValue}
        w={sizeValue}
        as="a"
        icon={children}
        aria-label={arialLabel}
      />
    </NextLink>
  );
}

// color={'cbPrimary.500'}
// _hover={{ color: 'cbPrimary.700' }}
// variant={'ghost'}
// title={'Edit this car'}
// size={'xs'}
