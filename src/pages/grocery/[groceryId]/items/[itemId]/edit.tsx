import { useRouter } from 'next/dist/client/router';
import { useGrocery, useGroceryItem, useGroceryItems } from '~/context/groceryContext';

export default function EditGroceryItem() {
  const { query } = useRouter();
  const [, dispatch] = useGroceryItems();
  const grocery = useGrocery(query.groceryId?.toString() ?? '');
  const item = useGroceryItem(query.itemId?.toString() ?? '');

  console.log();

  return (
    <div>
      <h1>EditGrocery</h1>
    </div>
  );
}
