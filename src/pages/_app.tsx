import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { Container } from '../common/components';
import { GroceryProvider } from '~/context/groceryContext';
import dynamic from 'next/dynamic';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* @TODO Corrigir Notch */}
        {/* <meta name="viewport" content="width=device-width,initial-scale=1" /> */}
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        /> */}
        <meta name="theme-color" content="#fff" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover, user-scalable=no" />
      </Head>
      <ChakraProvider>
        <Container>
          <GroceryProvider>
            <Component {...pageProps} />
          </GroceryProvider>
        </Container>
      </ChakraProvider>
    </>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
