import { Action } from '@ngrx/store';
import {
  FETCH_ACTIVE_USERS,
  FETCH_ACTIVE_USERS_FAILED,
  FETCH_ACTIVE_USERS_SUCCESS
} from './user.actions';
import { fromJS, Map } from 'immutable';

const INITIAL_STATE: Map<string, any> = fromJS({
  isPending: false,
  isSuccess: false,
  isError: false,
  errors: [],
  items: [
    { id: 0, nickName: 'Damian' },
    { id: 1, nickName: 'Daniel' },
    { id: 2, nickName: 'Asia' },
    { id: 3, nickName: 'Przemek' }
  ]
});

export function userReducer(state: Map<string, any> = INITIAL_STATE, action: Action): Map<string, any> {
  const actions = {
    [FETCH_ACTIVE_USERS]: () => {
      return state
        .set('isPending', true)
        .set('isSuccess', false)
        .set('isError', false);
    },
    [FETCH_ACTIVE_USERS_SUCCESS]: () => {
      return state
        .set('isPending', false)
        .set('isSuccess', true)
        .set('items', action.payload);
    },
    [FETCH_ACTIVE_USERS_FAILED]: () => {
      return state
        .set('isPending', false)
        .set('isError', true)
        .set('errors', action.payload);
    },
  };

  const stateChangingFn = actions[action.type];
  return !!stateChangingFn ? stateChangingFn() : state;
}
