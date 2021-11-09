/**
 * Checks if the code is running in the `browser`.
 */
export function isBrowser() {
  return typeof window === 'object';
}

/**
 * Checks if the code is running in the `server`.
 */
export function isServer() {
  return typeof window === 'undefined';
}
