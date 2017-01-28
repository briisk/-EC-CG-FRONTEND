export const LOGIN_USER = 'LOGIN_USER';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const CONNECTION_FAIL = 'CONNECTION_FAIL';

export function newAction(type) {
  return (payload?) => ({ payload, type });
}

export const loginUser = newAction('LOGIN_USER');
export const setCurrentUser = newAction('SET_CURRENT_USER');
export const connectionFail = newAction('CONNECTION_FAIL');
