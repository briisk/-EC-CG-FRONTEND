import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CCUserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
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
