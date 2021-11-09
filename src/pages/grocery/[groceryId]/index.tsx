import { useRouter } from 'next/dist/client/router';
import { useGrocery } from '~/context/groceryContext';

export default function GroceryDetails() {
  const { query } = useRouter();
  const grocery = useGrocery(query.groceryId?.toString() ?? '');
  return (
    <div>
      <h1>Grocery Details</h1>
    </div>
  );
}
