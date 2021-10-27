import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, CanActivateChild} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccessViewWaiterGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) { }
  private token = localStorage.getItem("token");
  private rol = localStorage.getItem("rol");

  canActivate() 
   {
    if(this.token == "" || this.token == null){
      console.log('No estás logueado');
      this.router.navigate(['/login']);
      return false;
    }
    if(this.rol == "cocinero"){
      console.log('No estás autorizado');
      this.router.navigate(['/chef/envoy']);
      return false;
    }
    if(this.rol == "admin"){
      console.log('No estás autorizado');
      this.router.navigate(['/admin/products']);
      return false;
    }
    return true;
   }
  canActivateChild()
   {
    return this.canActivate();
   }
  
}
