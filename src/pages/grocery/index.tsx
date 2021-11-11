import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import { SearchIcon } from '@chakra-ui/icons';
import { Input, List, ListItem } from '@chakra-ui/react';
import { Divider, Flex, Grid, Spacer } from '@chakra-ui/layout';
import { Title, IconButtonLink, Text } from '~/components';
import { useGroceries } from '~/context/groceryContext';
import Header from 'common/components/Header';

export default function Grocery() {
  const router = useRouter();
  const [groceries] = useGroceries();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    router.push({ query: { name: event.target.value } });
  }

  return (
    <>
      <Head>
        <title>Estabelecimento</title>
      </Head>
      <Header></Header>
      <Grid>
        <Title as="h2">Cadastrar</Title>
        <Flex>
          <Input
            value={router.query.name}
            name="name"
            placeholder="Basic usage"
            onChange={handleInputChange}
          />
          <Spacer />
          <IconButtonLink
            arial-label="Filter glocery items"
            href={{ pathname: '/grocery/create', query: router.query }}
          >
            <SearchIcon />
          </IconButtonLink>
        </Flex>
        <Title as="h2">Cadastrados</Title>
        <List as="ul" spacing="4">
          {groceries.map((grocery) => (
            <ListItem key={grocery.id}>
              <Grid>
                image
                <Spacer />
                <Text truncated>{grocery.category}</Text>
                <Text truncated>{grocery.name}</Text>
                <Divider />
              </Grid>
            </ListItem>
          ))}
        </List>
      </Grid>
    </>
  );
}
