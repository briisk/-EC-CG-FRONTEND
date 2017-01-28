import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs/rx';
import { PhoenixChannels } from '../../helpers/sockets';

@Component({
  selector: 'ecc-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private users$: Observable<Map<string, any>>;
  public socket;
  public gameChannel;

  constructor(
    private store: Store<AppState>,
  ) {
    this.users$ = store.select('users')
      .filter((userState: Map<string, any>) => !!userState && userState.size > 0)
      .map((userState: Map<string, any>) => userState.get('items'));
  }

  ngOnInit() {
  }

  play(nick: string) {
    this.gameChannel.send('new_msg', { body: nick });
  }
}
