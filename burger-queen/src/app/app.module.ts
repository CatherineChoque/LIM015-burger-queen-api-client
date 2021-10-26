import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ViewWaiterComponent } from './components/view-waiter/view-waiter.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderVerticalComponent } from './components/header-vertical/header-vertical.component';
import { ContainerWaiterComponent } from './components/view-waiter/container-waiter/container-waiter.component';
import { ContainerProductosComponent } from './components/view-waiter/container-productos/container-productos.component';
import { ContainerSumaryComponent } from './components/view-waiter/container-sumary/container-sumary.component';
import { ContainerSentComponent } from './components/view-waiter/container-sent/container-sent.component';
import { ContainerReadyComponent } from './components/view-waiter/container-ready/container-ready.component'; 
import { DataProductsSelectedService } from './services/data-products-selected.service';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContainerEnvoyComponent } from './components/view-chef/container-envoy/container-envoy.component';
import { ViewChefComponent } from './components/view-chef/view-chef.component';
import { ViewAdminComponent } from './components/view-admin/view-admin.component';
import { ContainerProductsComponent } from './components/view-admin/container-products/container-products.component';
import { ContainerUsersComponent } from './components/view-admin/container-users/container-users.component';
import { ContainerRecordComponent } from './components/view-admin/container-record/container-record.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewWaiterComponent,
    NotFoundComponent,
    HeaderVerticalComponent,
    ContainerWaiterComponent,
    ContainerProductosComponent,
    ContainerSumaryComponent,
    ContainerSentComponent,
    ContainerReadyComponent,
    ContainerEnvoyComponent,
    ViewChefComponent,
    ViewAdminComponent,
    ContainerProductsComponent,
    ContainerUsersComponent,
    ContainerRecordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [DataProductsSelectedService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
