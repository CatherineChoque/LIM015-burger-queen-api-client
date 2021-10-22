import { NgModule } from '@angular/core';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataProductsSelectedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
