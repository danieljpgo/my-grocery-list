import * as React from 'react';
import { isBrowser } from '~/lib/browser';

export const useLocalStorageState = <T>(
  key: string,
  initialState: T,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = React.useState(() => {
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

  return [state, setState];
};
