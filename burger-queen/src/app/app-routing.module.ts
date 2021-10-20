import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ViewWaiterComponent } from './components/view-waiter/view-waiter.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContainerSentComponent } from './components/view-waiter/container-sent/container-sent.component';
import { ContainerWaiterComponent } from './components/view-waiter/container-waiter/container-waiter.component';
import { ContainerReadyComponent } from './components/view-waiter/container-ready/container-ready.component';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'', redirectTo:'login',pathMatch:'full'},
  {
    path:'login', component:LoginComponent
  },
  {
    path:'waiter', component:ViewWaiterComponent,
    children: [
      {path:'menu', component: ContainerWaiterComponent},
      {path:'send', component:ContainerSentComponent},
      {path:'ready', component:ContainerReadyComponent}
    ]
  },
  {
    path:'**', component:NotFoundComponent
  },
];

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
