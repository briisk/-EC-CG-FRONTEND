import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserListComponent } from './src/app/user-list/user-list.component';
import { CCUserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CCUserListComponent,
    CCUserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
