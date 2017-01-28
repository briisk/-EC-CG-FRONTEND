import { Component } from '@angular/core';
import { createSocket } from './helpers';

@Component({
  selector: 'ecc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecc works!';
  public socket;

  constructor() {

  }

  click() {
    console.log('asd')
    this.socket.next({"topic":"game:lobby", "event":"phx_join", "payload": {"user":"%%ts_user_server:get_unique_id%%"}, "ref":"1"});
  }
}
