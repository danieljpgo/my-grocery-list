import * as React from 'react';
import Head from 'next/head';
import { CheckIcon, SearchIcon } from '@chakra-ui/icons';
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
      <Grid>
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
        <div>
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
                <Text>Nenhum item encontrado</Text>
              )}
            </List>
          ) : (
            <Text>Selecione ou crie uma Grocery</Text>
          )}
        </div>
        <Divider />
        <Grid>
          <Title as="h2">Opções</Title>
          <Flex>
            <IconButtonLink href="/grocery" arial-label="todo">
              <CheckIcon />
            </IconButtonLink>
            <Spacer />
            <IconButtonLink href="/grocery" arial-label="todo">
              <CheckIcon />
            </IconButtonLink>
          </Flex>
        </Grid>
      </Grid>
    </>
  );
}
