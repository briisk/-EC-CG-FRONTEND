import { ActionReducer, Action } from '@ngrx/store';

import { INCREMENT, DECREMENT, RESET } from './counter.actions';

export function counterReducer(state = 0, action: Action) {
  const actions = {
    [INCREMENT]: () => state + 1,
    [DECREMENT]: () => state - 1,
    [RESET]: () => 0,
  };
  const stateChangingFn = actions[action.type];
  return !!stateChangingFn ? stateChangingFn() : state;
}
