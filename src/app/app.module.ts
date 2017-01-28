import { UserModule } from './user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer, CounterComponent } from './counter';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { LoginScreenComponent } from './user/login-screen/login-screen.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BoardComponent } from './board/board.component';
import { boardReducer } from './board';
import { userReducer } from './user/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore({
      counter: counterReducer,
      board: boardReducer,
      user: userReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
