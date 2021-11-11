import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import { Title } from '~/components';
import { Select, Input, Textarea, Button } from '@chakra-ui/react';
import { Grid } from '@chakra-ui/layout';
import { useGroceries } from '~/context/groceryContext';
import Header from 'common/components/Header';

export default function CreateGrocery() {
  const router = useRouter();
  const [, dispatch] = useGroceries();

  // @TODO Adicionar debounce
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    router.push({
      query: {
        [event.target.name]: event.target.value,
      },
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // @TODO Remove any
    const data = new FormData(event.currentTarget);
    const formData = Object.fromEntries(data.entries()) as any;

    dispatch({
      type: 'CREATE_GROCERY',
      payload: {
        name: formData.name,
        category: formData.category,
        items: [],
        address: {
          street: formData.street,
          neighborhood: formData.neighborhood,
          number: formData.number,
        },
      } as any,
    });
    event.currentTarget.reset();
    router.push('/grocery');
  }

  return (
    <>
      <Head>
        <title>Estabelecimento</title>
      </Head>
      <Header>{`Estabelecimento - ${router.query.name ?? '...'}`}</Header>
      <form onSubmit={handleSubmit}>
        <Grid gap="6" pt="6">
          <Title as="h2">Lista de Compras</Title>
          <Input
            name="name"
            placeholder="Nome"
            onChange={handleInputChange}
            value={router.query.name}
          />
          <Select
            name="category"
            placeholder="Categoria"
            value="Supermercado"
            onChange={console.log}
          >
            <option value="Supermercado">Supermercado</option>
          </Select>
          <Title as="h2">Estabelecimento</Title>
          <Input name="street" placeholder="Bairro" />
          <Grid gap="6" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <Input type="number" name="number" placeholder="Número" />
            <Input name="neighborhood" placeholder="Bairro" />
          </Grid>
          <Textarea name="observations" placeholder="Observações" />
          <Button type="submit">Cadastrar</Button>
        </Grid>
      </form>
    </>
  );
}
