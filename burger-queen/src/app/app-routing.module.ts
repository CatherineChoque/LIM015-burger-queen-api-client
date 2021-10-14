import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ViewWaiterComponent } from './components/view-waiter/view-waiter.component';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'waiter',
    component: ViewWaiterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
