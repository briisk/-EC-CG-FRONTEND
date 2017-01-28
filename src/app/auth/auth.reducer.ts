import { Action } from '@ngrx/store';
import {
  LOGIN_USER,
} from './auth.actions';

import { fromJS, Map } from 'immutable';

const INITIAL_STATE: Map<string, any> = fromJS({
  auth: {
    currentUser: Map
  }
});

export function authReducer(state: Map<string, any> = INITIAL_STATE, action: Action): Map<string, any> {
  const actions = {
    [LOGIN_USER]: () => {
      return state
        .setIn(['auth', 'currentUser'], action.payload.nick)
    },
  };

  const stateChangingFn = actions[action.type];
  return !!stateChangingFn ? stateChangingFn() : state;
}
