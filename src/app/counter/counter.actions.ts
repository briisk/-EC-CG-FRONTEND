export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function newAction(type) {
  return (payload?) => ({ payload, type });
}

export const increment = newAction(INCREMENT);
export const decrement = newAction(DECREMENT);
export const reset = newAction(RESET);
