import * as React from 'react';
import { useLocalStorageReducer } from '~/hooks';
import { generateId } from '~/lib/generateData';

type Category = 'Supermercado';

type Address = {
  street: string;
  number: number;
  neighborhood: string;
};

type Item = {
  id: string;
  name: string;
  brand: string;
  price: number;
};

export type Grocery = {
  id: string;
  name: string;
  items: Item[];
  address: Address;
  category: Category;
  observations: string;
};

type GroceryActions =
  | { type: 'CREATE_GROCERY'; payload: Omit<Grocery, 'id'> }
  | { type: 'EDIT_GROCERY'; payload: Partial<Grocery> }
  | { type: 'DELETE_GROCERY'; payload: Pick<Grocery, 'id'> }
  | { type: 'CREATE_ITEM'; payload: { grocery: Pick<Grocery, 'id'>; item: Omit<Item, 'id'> } }
  | { type: 'EDIT_ITEM'; payload: { grocery: Pick<Grocery, 'id'>; item: Partial<Item> } }
  | { type: 'DELETE_ITEM'; payload: { grocery: Pick<Grocery, 'id'>; item: Pick<Item, 'id'> } };

const initialState: Grocery[] = [];

function groceryReducer(
  state: typeof initialState = initialState,
  action: GroceryActions,
): typeof initialState {
  switch (action.type) {
    case 'CREATE_GROCERY':
      return [...state, { ...action.payload, id: `${generateId()}` }];
    case 'EDIT_GROCERY':
      return state.map((grocery) => {
        if (grocery.id === action.payload.id) {
          return { ...grocery, ...action.payload };
        }
        return grocery;
      });
    case 'DELETE_GROCERY':
      return state.filter((grocery) => grocery.id !== action.payload.id);
    case 'CREATE_ITEM':
      return state.map((grocery) => {
        if (grocery.id === action.payload.grocery.id) {
          return {
            ...grocery,
            items: [...grocery.items, { ...action.payload.item, id: `${generateId()}` }],
          };
        }
        return grocery;
      });
    case 'EDIT_ITEM':
      return state.map((grocery) => {
        if (grocery.id === action.payload.grocery.id) {
          return {
            ...grocery,
            items: grocery.items.map((item) => {
              if (item.id === action.payload.item.id) {
                return { ...item, ...action.payload.item };
              }
              return item;
            }),
          };
        }
        return grocery;
      });
    case 'DELETE_ITEM':
      return state.map((grocery) => {
        if (grocery.id === action.payload.grocery.id) {
          return {
            ...grocery,
            items: grocery.items.filter((item) => item.id !== action.payload.item.id),
          };
        }
        return grocery;
      });

    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}

type GroceryContextType = [Grocery[], React.Dispatch<GroceryActions>] | undefined;
const GroceryContext = React.createContext<GroceryContextType>(undefined);
GroceryContext.displayName = 'GroceryContext';

type GroceryProviderProps = {
  children: React.ReactNode;
};
export function GroceryProvider({ children }: GroceryProviderProps) {
  const [state, dispatch] = useLocalStorageReducer(
    'my-grocery-list@groceries',
    groceryReducer,
    initialState,
  );
  return <GroceryContext.Provider value={[state, dispatch]}>{children}</GroceryContext.Provider>;
}

function useGroceryContext() {
  const context = React.useContext(GroceryContext);
  if (context === undefined) {
    throw new Error('useGroceryContext must be used within a GroceryProvider');
  }
  return context;
}

export function useGrocery(id: string) {
  const [groceries] = useGroceryContext();
  return groceries.find((grocery) => grocery.id === id);
}

type GroceriesActions = Exclude<
  GroceryActions,
  { type: 'CREATE_ITEM' } | { type: 'EDIT_ITEM' } | { type: 'DELETE_ITEM' }
>;
export function useGroceries() {
  const [groceries, dispatch] = useGroceryContext();

  const groceriesActions = React.useCallback(
    (actions: GroceriesActions) => dispatch(actions),
    [dispatch],
  );

  return [groceries, groceriesActions] as const;
}

type GroceryItemsActions = Exclude<
  GroceryActions,
  { type: 'CREATE_GROCERY' } | { type: 'EDIT_GROCERY' } | { type: 'DELETE_GROCERY' }
>;
export function useGroceryItems() {
  const [groceries, dispatch] = useGroceryContext();

  const groceryItemsActions = React.useCallback(
    (actions: GroceryItemsActions) => dispatch(actions),
    [dispatch],
  );

  return [groceries, groceryItemsActions] as const;
}

export function useGroceryItem(id: string) {
  const [groceries] = useGroceryContext();
  const grocery = groceries.find((grocery) => grocery.items.find((item) => item.id === id));

  if (!grocery) {
    return undefined;
  }

  return grocery.items.find((item) => item.id === id);
}
