export const SET_PAWN = 'SET_PAWN';
export const SET_PLAYER1 = 'SET_PLAYER1';
export const SET_PLAYER2 = 'SET_PLAYER2';

export function newAction(type) {
  return (payload?) => ({ payload, type });
}

export const setPawn = newAction(SET_PAWN);
export const setPlayer1 = newAction(SET_PLAYER1);
export const setPlayer2 = newAction(SET_PLAYER2);
