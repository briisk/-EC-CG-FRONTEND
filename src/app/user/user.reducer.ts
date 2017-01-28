import { Action } from '@ngrx/store';
import {
  FETCH_ACTIVE_USERS_FAILED,
  FETCH_ACTIVE_USERS_SUCCESS
} from './user.actions';
import { fromJS, Map } from 'immutable';

const INITIAL_STATE: Map<string, any> = fromJS({
  isSuccess: false,
  isError: false,
  errors: [],
  items: []
});

export function userReducer(state: Map<string, any> = INITIAL_STATE, action: Action): Map<string, any> {
  const actions = {
    [FETCH_ACTIVE_USERS_SUCCESS]: () => {
      console.log(action.payload);
      return state
        .set('isSuccess', true)
        .set('items', action.payload);
    },
    [FETCH_ACTIVE_USERS_FAILED]: () => {
      return state
        .set('isError', true)
        .set('errors', action.payload);
    },
  };

  const stateChangingFn = actions[action.type];
  return !!stateChangingFn ? stateChangingFn() : state;
}
