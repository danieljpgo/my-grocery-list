import { IconButton } from '@chakra-ui/button';
import { Divider, Flex, Grid, Spacer } from '@chakra-ui/layout';
import { CheckIcon, SearchIcon } from '@chakra-ui/icons';
import { Checkbox, Select, List, ListItem } from '@chakra-ui/react';
import Head from 'next/head';
import { Title, IconButtonLink, Text } from '../common/components';

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

        <List as="ol" spacing="4">
          <ListItem>
            <Flex>
              <Checkbox defaultIsChecked>
                <Text truncated>a</Text>
              </Checkbox>
              <Spacer />
              <Text truncated bold>
                a
              </Text>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex>
              <Checkbox defaultIsChecked>
                <Text truncated>a</Text>
              </Checkbox>
              <Spacer />
              <Text truncated bold>
                a
              </Text>
            </Flex>
          </ListItem>
        </List>

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
