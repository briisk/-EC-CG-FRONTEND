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
    // const socket = createSocket('ws://echo.websocket.org');
    this.socket = createSocket('ws://192.168.0.117:4000/socket/websocket');
    setTimeout(() => {
      

    }, 1000)

    // setTimeout(() => {
    //   socket.next('zxc');

    // }, 5000)

    this.socket.subscribe((item) => console.log(item));
    // socket.next('asd');

  }

  click() {
    console.log('asd')
    this.socket.next({"topic":"game:lobby", "event":"phx_join", "payload": {"user":"%%ts_user_server:get_unique_id%%"}, "ref":"1"});
  }
}
