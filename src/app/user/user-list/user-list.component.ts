import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'ecc-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private users$: Observable<Map<string, any>>;

  constructor(private store: Store<AppState>) {
    this.users$ = store.select('users').map((userState: Map<string, any>) => userState.get('items'));
  }

  ngOnInit() {
  }

}
