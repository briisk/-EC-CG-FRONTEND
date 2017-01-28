import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecc-login-screen',
  templateUrl: 'login-screen.component.html',
  styleUrls: ['login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  private nick: string;

  constructor() {
  }

  ngOnInit() {
  }

  //TODO rewrite for reactive components.
  registerUser() {
    console.log(`add user register here ${this.nick}`);
  }

  onKey(event:any) {
    this.nick = event.target.value;
  }
}
