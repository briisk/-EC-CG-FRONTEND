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

  constructor(
  ) {

  }
}
