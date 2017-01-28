import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CCUserListComponent } from './user-list/user-list.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

const routes: Routes = [
  {
    path: '',
    component: LoginScreenComponent,
    children: [{
      path: 'user-list',
      component: CCUserListComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
