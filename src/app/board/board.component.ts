import { Component, OnInit } from '@angular/core';
import { ActionReducer, Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { AppState } from '../app.state';
import { Map } from 'immutable';

@Component({
  selector: 'ecc-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public board;

  constructor(private store: Store<AppState>){
    this.board = store.select('board').map((item: Map<string, any>) => item.get('boxes').toJS());
  }

  ngOnInit() {
  }

}
