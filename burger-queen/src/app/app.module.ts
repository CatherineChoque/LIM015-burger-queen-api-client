import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ViewWaiterComponent } from './components/view-waiter/view-waiter.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderVerticalComponent } from './components/header-vertical/header-vertical.component';
import { ContainerWaiterComponent } from './components/view-waiter/container-waiter/container-waiter.component'; 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewWaiterComponent,
    NotFoundComponent,
    HeaderVerticalComponent,
    ContainerWaiterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
