import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { LoginScreenComponent } from './login-screen/login-screen.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoginScreenComponent
  ]
})
export class AuthModule { }
