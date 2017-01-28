import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ecc-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  private users$ = Observable.of([
    { id: 0, nickName: 'Damian' },
    { id: 1, nickName: 'Daniel' },
    { id: 2, nickName: 'Asia' },
    { id: 3, nickName: 'Przemek' },
  ]);

  constructor() { }

  ngOnInit() {
  }

}
