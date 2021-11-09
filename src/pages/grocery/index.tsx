import { useRouter } from 'next/dist/client/router';
import { useGroceries } from '~/context/groceryContext';

export default function Grocery() {
  const { query } = useRouter();
  const [groceries, dispatch] = useGroceries();

  // @todo navigar para rota com o query params com o nome

  return (
    <div>
      <h1>Grocery</h1>
    </div>
  );
}
