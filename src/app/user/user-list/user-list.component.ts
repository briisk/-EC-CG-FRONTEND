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

  users$ = Observable.of([
    { id: 0, nickName: 'Damian' },
    { id: 1, nickName: 'Daniel' },
    { id: 2, nickName: 'Asia' },
    { id: 3, nickName: 'Przemek' },
  ]);

  constructor(private store: Store<AppState>) {
    store.select('user').subscribe(console.log);
  }

  ngOnInit() {
  }

}
