import { useGroceries } from '~/context/groceryContext';

export default function CreateGrocery() {
  const [, dispatch] = useGroceries();

  return (
    <div>
      <h1>CreateGrocery</h1>
    </div>
  );
}
