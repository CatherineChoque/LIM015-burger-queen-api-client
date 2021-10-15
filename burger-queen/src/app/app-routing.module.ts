import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ViewWaiterComponent } from './components/view-waiter/view-waiter.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'waiter', component:ViewWaiterComponent},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
