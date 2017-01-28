export interface Box {
  playerId: string;
}

export interface Board {
  player1: any;
  player2: any;
  boxes: Box[][];
}
