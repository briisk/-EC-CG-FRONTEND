import { Action } from '@ngrx/store';
import {
  LOGIN_USER,
  SET_CURRENT_USER,
  CONNECTION_FAIL,
} from './auth.actions';

import { fromJS, Map } from 'immutable';

const INITIAL_STATE: Map<string, any> = fromJS({
  auth: {
    currentUser: {
      nick: undefined,
      id: undefined,
    }
  }
});

export function authReducer(state: Map<string, any> = INITIAL_STATE, action: Action): Map<string, any> {
  const actions = {
    [LOGIN_USER]: () => {
      console.log('payload', action.payload);
      return state
        .setIn(['auth', 'currentUser', 'nick'], action.payload.nick)
    },
    [SET_CURRENT_USER]: () => {
      console.log('payload', action.payload);
      return state
      .setIn(['auth', 'currentUser', 'id'], action.payload)

    },
    [CONNECTION_FAIL]: () => {
      console.log('Fail to establish connection with remote server');
      return state
    },
  };

  const stateChangingFn = actions[action.type];
  return !!stateChangingFn ? stateChangingFn() : state;
}
