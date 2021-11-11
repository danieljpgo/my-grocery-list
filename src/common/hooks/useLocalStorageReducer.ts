import * as React from 'react';
import { isBrowser } from '~/lib/browser';

export function useLocalStorageReducer<Data extends React.Reducer<any, any>>(
  key: string,
  reducer: Data,
  initialState: React.ReducerState<Data>,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
) {
  const [state, dispatch] = React.useReducer(reducer, initialState, () => {
    const init = typeof initialState === 'function' ? initialState() : initialState;
    try {
      const valueInLocalStorage = isBrowser() && localStorage.getItem(key);
      return valueInLocalStorage ? deserialize(valueInLocalStorage) : init;
    } catch (error) {
      return init;
    }
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      isBrowser() && localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    isBrowser() && localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, dispatch] as const;
}
