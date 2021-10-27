import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, CanActivateChild} from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify/alertify-service.service';

@Injectable({
  providedIn: 'root'
})
export class AccessViewAdminGuard implements CanActivate, CanActivateChild {
 
  constructor(private router: Router,private alertify: AlertifyService) { }
  private token = localStorage.getItem("token");
  private rol = localStorage.getItem("rol");

  canActivate() 
   {
    if(this.token == "" || this.token == null){
      this.router.navigate(['/login']);
      this.alertify.error('No estas Logueado');
      return false;
    }
    if(this.rol == "mesero"){
      this.router.navigate(['/waiter/menu']);
      this.alertify.error('No estás autorizado');
      return false;
    }
    if(this.rol == "cocinero"){
      this.router.navigate(['/chef/envoy']);
      this.alertify.error('No estás autorizado');
      return false;
    }
    return true;
   }
  canActivateChild()
   {
    return this.canActivate();
   }
  
}
