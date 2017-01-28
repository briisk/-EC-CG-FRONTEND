import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { LoginScreenComponent } from './user/login-screen/login-screen.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  {
    path: '',
    component: LoginScreenComponent,
    pathMatch: 'full'
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'board',
    component: BoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
