import { useRouter } from 'next/dist/client/router';
import { useGrocery } from '~/context/groceryContext';

export default function EditGrocery() {
  const { query } = useRouter();
  const grocery = useGrocery(query.groceryId?.toString() ?? '');

  return (
    <div>
      <h1>EditGrocery</h1>
    </div>
  );
}
