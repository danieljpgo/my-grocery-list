import * as React from 'react';
import Head from 'next/head';
import { PlusSquareIcon, SearchIcon } from '@chakra-ui/icons';
import { Divider, Flex, Grid, Spacer } from '@chakra-ui/layout';
import { Checkbox, Select, List, ListItem, IconButton } from '@chakra-ui/react';
import { useGrocery, useGroceries } from '~/context/groceryContext';
import { Title, IconButtonLink, Text } from '~/components';
import { useLocalStorageState } from '~/hooks';

export default function Home() {
  const [selectGrocery, setSelectGrocery] = useLocalStorageState(
    'my-grocery-list@grocery:select',
    '',
  );
  const [groceries] = useGroceries();
  const grocery = useGrocery(selectGrocery);

  function handleSelectGrocery(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectGrocery(event.target.value);
  }

  return (
    <>
      <Head>
        <title>{`Página Inicial${grocery ? ` - ${grocery.name}` : ''}`}</title>
      </Head>
      <Grid gap="6">
        <Select name="selectgrocery" value={selectGrocery} onChange={handleSelectGrocery}>
          {groceries.map(({ name, id }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
        <Flex>
          <Title as="h2">Lista de Compras</Title>
          <Spacer />
          <IconButton disabled aria-label="Filter glocery items" icon={<SearchIcon />} />
        </Flex>
        <Grid style={{ gridTemplateRows: '1fr 1fr' }}>
          {grocery ? (
            <List as="ul" spacing="4">
              {grocery.items.length ? (
                grocery.items.map((item) => (
                  <ListItem key={item.id}>
                    <Grid>
                      <Text truncated>{item.brand}</Text>
                      <Flex>
                        <Checkbox defaultIsChecked>
                          <Text truncated>{item.name}</Text>
                        </Checkbox>
                        <Spacer />
                        <Text truncated bold>
                          {`${item.price}`}
                        </Text>
                      </Flex>
                    </Grid>
                  </ListItem>
                ))
              ) : (
                <ListItem textAlign="center">Nenhum item encontrado</ListItem>
              )}
            </List>
          ) : (
            <Text>Selecione ou crie uma Grocery</Text>
          )}
          <Grid gap="6">
            <Divider />
            <Title as="h2">Opções</Title>
            <IconButtonLink size="xl" href="/grocery" arial-label="todo">
              <PlusSquareIcon />
            </IconButtonLink>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
