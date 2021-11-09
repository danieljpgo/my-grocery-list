import { useRouter } from 'next/dist/client/router';
import { useGrocery, useGroceryItems } from '~/context/groceryContext';

export default function CreateGroceryItem() {
  const { query } = useRouter();
  const [, dispatch] = useGroceryItems();
  const grocery = useGrocery(query.groceryId?.toString() ?? '');

  return <h1>CreateGroceryItem</h1>;
}
