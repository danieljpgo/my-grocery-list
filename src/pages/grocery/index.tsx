import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { Input, List, ListItem } from '@chakra-ui/react';
import { Divider, Grid, Spacer } from '@chakra-ui/layout';
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
      <Header>Estabelecimento</Header>
      <Grid gap="6" pt="6">
        <Title as="h2">Cadastrar</Title>
        <Grid gap="6" style={{ gridTemplateColumns: 'auto auto' }}>
          <Input
            value={router.query.name}
            name="name"
            placeholder="Nome"
            onChange={handleInputChange}
          />
          <IconButtonLink
            arial-label="Filter glocery items"
            href={{ pathname: '/grocery/create', query: router.query }}
          >
            <PlusSquareIcon />
          </IconButtonLink>
        </Grid>
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
