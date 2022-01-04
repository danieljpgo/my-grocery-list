export type Category = 'Supermercado';

export type Address = {
  street: string;
  number: number;
  neighborhood: string;
};

export type Item = {
  id: string;
  name: string;
  brand: string;
  price: number;
};

export type Grocery = {
  id: string;
  name: string;
  items: Array<Item>;
  address: Address;
  category: Category;
  observations: string;
};
