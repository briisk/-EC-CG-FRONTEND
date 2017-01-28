import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { fetchActiveUsersSuccess, fetchActiveUsersFailed } from './user.actions';
import { PhoenixChannels } from '../helpers/sockets';

@Injectable()
export class UserEffects {
  public gameChannel;

  @Effect() fetchActiveUsers$ = this.gameChannel.observeMessage('new_msg')
    .map(msg => fetchActiveUsersSuccess(msg))
    .catch((err) => fetchActiveUsersFailed(err));

  constructor(
    private phoenixChannels: PhoenixChannels
  ) {
    this.gameChannel = phoenixChannels.channel('game:lobby');
    this.gameChannel.join();
  }
}
