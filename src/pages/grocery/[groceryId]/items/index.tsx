import { useRouter } from 'next/dist/client/router';
import { useGrocery } from '~/context/groceryContext';

export default function GroceryItems() {
  const { query } = useRouter();
  const grocery = useGrocery(query.groceryId?.toString() ?? '');

  return <h1>Items</h1>;
}
