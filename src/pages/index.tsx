import * as React from 'react';
import Head from 'next/head';
import { PlusSquareIcon, SearchIcon, AttachmentIcon } from '@chakra-ui/icons';
import { Flex, Grid, Checkbox, Select, List, ListItem, IconButton } from '@chakra-ui/react';
import { useGrocery, useGroceries } from '~/context/groceryContext';
import { Divider, Title, IconButtonLink, Text, Shelf, Stack, Spacer } from '~/components';
import { useLocalStorageState } from '~/hooks';

export default function Home() {
  const [selectGrocery, setSelectGrocery] = useLocalStorageState('@grocery:select', '');
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
      <Stack fullHeight gap="6">
        <Select
          name="selectgrocery"
          value={selectGrocery}
          placeholder={!selectGrocery ? 'Selecione ou crie uma Grocery' : undefined}
          onChange={handleSelectGrocery}
        >
          {groceries.map(({ name, id }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
        <Shelf>
          <Title as="h2">Lista de Compras</Title>
          <Spacer />
          <IconButton disabled aria-label="Filter glocery items" icon={<SearchIcon />} />
        </Shelf>
        <div style={{ height: '100%', maxHeight: '100%' }}>
          {grocery ? (
            <List as="ul" spacing="4">
              {grocery.items.length ? (
                <>
                  {grocery.items.map((item) => (
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
                  ))}
                  <Divider />
                </>
              ) : (
                <ListItem textAlign="center">Nenhum item encontrado</ListItem>
              )}
            </List>
          ) : (
            <Text>Nenhuma Grocery cadastrada</Text>
          )}
        </div>
        <Title as="h2">Opções</Title>
        <Shelf gap="6">
          <IconButtonLink fullWidth size="md" href="/grocery" arial-label="todo">
            <PlusSquareIcon />
          </IconButtonLink>
          <IconButtonLink fullWidth size="md" href="/grocery" arial-label="todo">
            <AttachmentIcon />
          </IconButtonLink>
        </Shelf>
      </Stack>
    </>
  );
}
