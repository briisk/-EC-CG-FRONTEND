import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { fetchActiveUsersSuccess, fetchActiveUsersFailed } from './user.actions';
import { PhoenixChannels } from '../helpers/sockets';
import { LOGIN_USER, SET_CURRENT_USER, setCurrentUser, connectionFail } from '../auth/auth.actions';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserEffects {
  public gameChannel;
  public socket;

  constructor(
    private actions$: Actions,
    private phoenixChannels: PhoenixChannels
  ) {
    this.gameChannel = phoenixChannels.channel('game:lobby');
  }

  @Effect() fetchActiveUsers$ = this.actions$
    .ofType(SET_CURRENT_USER)
    .map(() => {
      this.gameChannel.observeMessage('new_msg')
        .map(msg => fetchActiveUsersSuccess(msg))
        .catch((err) => fetchActiveUsersFailed(err));
    });


  @Effect() loginUser$ = this.actions$
    .ofType(LOGIN_USER)
    .do(() => console.log('dziala'))
    .map(action => JSON.stringify(action.payload))
    .switchMap(payload =>  this.gameChannel.join()
      .map(res => setCurrentUser(res))
      .catch(() => Observable.of(connectionFail()))
  )
}
