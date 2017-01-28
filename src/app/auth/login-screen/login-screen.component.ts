import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { loginUser } from '../auth.actions';

@Component({
  selector: 'ecc-login-screen',
  templateUrl: 'login-screen.component.html',
  styleUrls: ['login-screen.component.scss']
})
export class LoginScreenComponent {
  private nick: string;

  constructor(private store: Store<AppState>) {
  }

  //TODO rewrite for reactive components.
  registerUser(event: Event) {
    event.preventDefault();
    this.store.dispatch(loginUser({nick: this.nick}))
  }

  onKey(event:any) {
    this.nick = event.target.value;
  }
}
