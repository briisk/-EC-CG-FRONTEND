import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer, CounterComponent } from './counter';
import { AppComponent } from './app.component';
import { CCUserListComponent } from './user-list/user-list.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

@NgModule({
  declarations: [
    CCUserListComponent,
    AppComponent,
    CounterComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
