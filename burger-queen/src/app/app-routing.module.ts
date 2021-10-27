import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ViewWaiterComponent } from './components/view-waiter/view-waiter.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContainerSentComponent } from './components/view-waiter/container-sent/container-sent.component';
import { ContainerWaiterComponent } from './components/view-waiter/container-waiter/container-waiter.component';
import { ContainerReadyComponent } from './components/view-waiter/container-ready/container-ready.component';
import { ContainerEnvoyComponent } from './components/view-chef/container-envoy/container-envoy.component';
import { ViewChefComponent } from './components/view-chef/view-chef.component';
import { ViewAdminComponent } from './components/view-admin/view-admin.component';
import { ContainerProductsComponent } from './components/view-admin/container-products/container-products.component';
import { ContainerUsersComponent } from './components/view-admin/container-users/container-users.component';
import { ContainerRecordComponent } from './components/view-admin/container-record/container-record.component';
import { AccessViewWaiterGuard } from './guards/access-view-waiter.guard';
import { AccessViewChefGuard } from './guards/access-view-chef.guard';
import { AccessViewAdminGuard } from './guards/access-view-admin.guard';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'', redirectTo:'login',pathMatch:'full'},
  {
    path:'login', component:LoginComponent
  },
  {
    path:'waiter', component:ViewWaiterComponent,
    canActivate: [AccessViewWaiterGuard],
    canActivateChild:[AccessViewWaiterGuard],
    children: [
      {path:'menu', component: ContainerWaiterComponent},
      {path:'sent', component:ContainerSentComponent},
      {path:'ready', component:ContainerReadyComponent}
    ]
  },
  {
    path:'chef', component:ViewChefComponent,
    canActivate: [AccessViewChefGuard],
    canActivateChild:[AccessViewChefGuard],
    children: [
      {path:'envoy', component:ContainerEnvoyComponent},
    ]
  },
  {
    path:'admin', component:ViewAdminComponent,
    canActivate: [AccessViewAdminGuard],
    canActivateChild:[AccessViewAdminGuard],
    children: [
      {path:'products', component:ContainerProductsComponent},
      {path:'users', component:ContainerUsersComponent},
      {path:'record', component:ContainerRecordComponent},
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
