import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AppState } from '../app.state';

@Component({
    selector: 'ecc-counter',
    template: `
        <button (click)="increment()">Increment</button>
        <div>Current Count: {{ counter | async }}</div>
        <button (click)="decrement()">Decrement</button>

        <button (click)="reset()">Reset Counter</button>
    `
})
export class CounterComponent {
  counter: Observable<number>;

  constructor(private store: Store<AppState>){
    this.counter = store.select('counter');
  }

  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());
  }

  reset(){
    this.store.dispatch(reset());
  }
}
