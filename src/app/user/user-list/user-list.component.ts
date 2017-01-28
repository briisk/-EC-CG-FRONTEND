import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { AppState } from '../../app.state';
import { fetchActiveUsers } from '../user.actions';

@Component({
  selector: 'ecc-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private users$: Observable<Map<string, any>>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(fetchActiveUsers());
    this.users$ = store.select('users')
      .filter((userState: Map<string, any>) => !!userState && userState.size > 0)
      .map((userState: Map<string, any>) => userState.get('items'));
  }

  ngOnInit() {
  }
}
