import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { loginUser } from '../auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'ecc-login-screen',
  templateUrl: 'login-screen.component.html',
  styleUrls: ['login-screen.component.scss']
})
export class LoginScreenComponent {
  private nick: string;
  private isLoginSuccess$;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.isLoginSuccess$ = store.select('auth')
      .filter((authState: Map<string, any>) => !!authState && authState.size > 0)
      .do((auth: any) => console.log(auth.toJS()))
      .map((authState: any) => authState.getIn(['auth', 'currentUser', 'isSuccess']));

    this.isLoginSuccess$
      .do(console.log)
      .filter(Boolean)
      .subscribe(() => this.router.navigate(['/user-list']));
  }

  // TODO rewrite for reactive components.
  registerUser(event: Event) {
    event.preventDefault();
    this.store.dispatch(loginUser({ nick: this.nick }));
  }

  onKey(event: any) {
    this.nick = event.target.value;
  }
}
