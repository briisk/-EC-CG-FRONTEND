import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserListComponent,
    LoginScreenComponent
  ]
})
export class UserModule { }
