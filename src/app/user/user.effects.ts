import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import * as userActions from './user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private http: Http,
    private actions$: Actions
  ) { }

  @Effect() fetchActiveUsers$ = this.actions$
    .ofType(userActions.FETCH_ACTIVE_USERS)
    .map(action => JSON.stringify(action.payload))
    .switchMap(payload => this.http.post('/fetch', payload)
      .map(res => userActions.fetchActiveUsersSuccess(res.json()))
      .catch(() => Observable.of(userActions.fetchActiveUsersFailed()))
    );
}
