import * as React from 'react';
import NextLink from 'next/link';
import { UrlObject } from 'url';
import { IconButton } from '@chakra-ui/button';

const sizes = {
  sm: 10,
  md: 20,
  lg: 30,
} as const;

type IconButtonLinkProps = {
  href: string | UrlObject;
  children: React.ReactElement;
  'arial-label': string;
  size?: keyof typeof sizes;
  disabled?: boolean;
  fullWidth?: boolean;
};

export default function IconButtonLink(props: IconButtonLinkProps) {
  const { disabled, href, children, 'arial-label': arialLabel, size = 'sm', fullWidth } = props;

  return (
    <NextLink href={href} passHref>
      <IconButton
        disabled={disabled}
        h={sizes[size]}
        w={fullWidth ? '100%' : sizes[size]}
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
