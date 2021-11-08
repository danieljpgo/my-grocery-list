import { IconButton } from '@chakra-ui/button';
import { Divider, Flex, Grid, Spacer } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { SearchIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import Head from 'next/head';
import Title from '../common/components/Title';

export default function Home() {
  return (
    <>
      <Head>
        <title>{Home}</title>
      </Head>
      <Grid>
        <Select></Select>

        <Flex>
          <Title as="h2">Lista de Compras</Title>
          <Spacer />
          <IconButton aria-label="Filter glocery items" icon={<SearchIcon />} />
        </Flex>

        <Divider />
        <NextLink href="grocery" passHref>
          <Link>Link</Link>
        </NextLink>

      </Grid>
    </>
  )
}
