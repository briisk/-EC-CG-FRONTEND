import { Action } from '@ngrx/store';
import {
  FETCH_ACTIVE_USERS,
  FETCH_ACTIVE_USERS_FAILED,
  FETCH_ACTIVE_USERS_SUCCESS
} from './user.actions';
import { fromJS, Map } from 'immutable';

const INITIAL_STATE: Map<string, any> = fromJS({
  users: {
    isPending: false,
    isSuccess: false,
    isError: false,
    errors: [],
    items: []
  }
});

export function userReducer(state: Map<string, any> = INITIAL_STATE, action: Action): Map<string, any> {
  const actions = {
    [FETCH_ACTIVE_USERS]: () => {
      return state
        .setIn(['users', 'isPending'], true)
        .setIn(['users', 'isSuccess'], false)
        .setIn(['users', 'isError'], false);
    },
    [FETCH_ACTIVE_USERS_SUCCESS]: () => {
      return state
        .setIn(['users', 'isPending'], false)
        .setIn(['users', 'isSuccess'], true)
        .setIn(['users', 'items'], action.payload);
    },
    [FETCH_ACTIVE_USERS_FAILED]: () => {
      return state
        .setIn(['users', 'isPending'], false)
        .setIn(['users', 'isError'], true)
        .setIn(['users', 'errors'], action.payload);
    },
  };

  const stateChangingFn = actions[action.type];
  return !!stateChangingFn ? stateChangingFn() : state;
}
