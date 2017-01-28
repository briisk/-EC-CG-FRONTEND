export const LOGIN_USER = 'LOGIN_USER';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function newAction(type) {
  return (payload?) => {
    return ({ payload, type });
  }
}

export const loginUser = newAction('LOGIN_USER');
