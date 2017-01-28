import { ActionReducer, Action } from '@ngrx/store';
import { Board } from './board.models';
import { SET_PAWN, SET_PLAYER1, SET_PLAYER2 } from './board.actions';
import { fromJS, Map } from 'immutable';

const initState: Map<string, any> = fromJS({
  player1: {
    shape: 'circle',
  },
  player2: {
    shape: 'cross',
  },
  boxes: Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => ({ playerId: '' }))),
  currentUser: 'player1',
});

export function boardReducer(state = initState, action: Action) {
  const actions = {
    [SET_PAWN]: () => state
      .setIn(['boxes', action.payload.column, action.payload.row, 'playerId'], state.getIn([state.get('currentUser'), 'shape']))
      .set('currentUser', state.get('currentUser') === 'player1' ? 'player2' : 'player1'),
    [SET_PLAYER1]: () => state.set('player1', action.payload.player),
    [SET_PLAYER2]: () => state.set('player2', action.payload.player),
  };
  const stateChangingFn = actions[action.type];
  return !!stateChangingFn ? stateChangingFn() : state;
}
