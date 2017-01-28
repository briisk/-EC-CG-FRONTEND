import { Component } from '@angular/core';
import { createSocket } from './helpers';
import { PhoenixChannels } from './helpers';

@Component({
  selector: 'ecc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecc works!';
  public socket;
  public gameChannel;

  constructor(
    phoenixChannels: PhoenixChannels
  ) {
    // this.gameChannel = phoenixChannels.channel('game:lobby');
    // this.gameChannel.join({data: 'asd'}).subscribe(item => console.log(item));
    // const phoenixObservable = this.gameChannel.observeMessage('new_msg');
    // phoenixObservable.subscribe(item => console.log(item));
  }

  click() {
    this.gameChannel.send('new_msg',  { user: 'pszemek'} );
  }
}
