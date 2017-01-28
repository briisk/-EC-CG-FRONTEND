import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { UserEffects } from './user.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.run(UserEffects)
  ],
  declarations: [
    UserListComponent,
    LoginScreenComponent
  ]
})
export class UserModule { }
