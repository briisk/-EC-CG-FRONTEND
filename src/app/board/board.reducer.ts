import { ActionReducer, Action } from '@ngrx/store';
import { Board } from './board.models';
import { SET_PAWN, SET_PLAYER1, SET_PLAYER2 } from './board.actions';
import { fromJS, Map } from 'immutable';

const initState: Map<string, any> = fromJS({
  player1: {
    color: 'red',
  },
  player2: {
    color: 'blue',
  },
  boxes: Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => ({ playerId: '' }))),
});

export function boardReducer(state = initState, action: Action) {
  const actions = {
    [SET_PAWN]: () => state.setIn(['boxes', action.payload.column, action.payload.row, 'playerId'], action.payload.user),
    [SET_PLAYER1]: () => state.set('player1', action.payload.player),
    [SET_PLAYER2]: () => state.set('player2', action.payload.player),
  };
  const stateChangingFn = actions[action.type];
  return !!stateChangingFn ? stateChangingFn() : state;
}
