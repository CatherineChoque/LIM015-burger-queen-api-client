import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ViewWaiterComponent } from './components/view-waiter/view-waiter.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderVerticalComponent } from './components/header-vertical/header-vertical.component'; 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewWaiterComponent,
    NotFoundComponent,
    HeaderComponent,
    HeaderVerticalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
