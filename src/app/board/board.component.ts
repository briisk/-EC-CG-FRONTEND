import { Component, OnInit } from '@angular/core';
import { ActionReducer, Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { AppState } from '../app.state';
import { Map } from 'immutable';
import { setPawn } from './board.actions';

@Component({
  selector: 'ecc-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public board;
  public player1;
  public player2;

  constructor(private store: Store<AppState>){
    this.board = store.select('board').map((item: Map<string, any>) => item.get('boxes').toJS());
    this.player1 = store.select('player1');
    this.player2 = store.select('player2');
  }

  ngOnInit() {
  }

  handleClick(column, row) {
    this.store.dispatch(setPawn({ column, row }));
  }

}
