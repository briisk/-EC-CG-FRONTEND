import { Map } from 'immutable';

export interface AppState {
  counter: number;
  board: Map<string, any>;
  user: Map<string, any>;
}
