import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify/alertify-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public load = false;
  infoUser = []; //hace instancia hacia la repuesta que te da api ej. [{_id:..,email:..}]

  constructor(private serviceLogin:ApiService, private router: Router, private alertify:AlertifyService) { }
  
  ngOnInit(): void {
  }

  sendEmailPassword(values: any) {
    this.load = true;
   this.serviceLogin.loginByEmail(values).subscribe(data => {
     localStorage.setItem('token', data.token);
     this.getInfoUser(values.email); 
   },error => {
     this.load = false;
    this.alertify.error('Error: '+error.error.message);
  });
  }

  getInfoUser(email:string){
    this.serviceLogin.getUserAuth(email).subscribe( response => {
      let rol;
      const dataUserAuth=Object.values(response);
      localStorage.setItem('idUserAuth', JSON.stringify(dataUserAuth[0]));
      const admin=dataUserAuth[3].admin;
      rol=(admin) ? "admin" : dataUserAuth[3].name;
      localStorage.setItem('rol', rol);
      switch(rol){
        case "mesero":
          this.router.navigateByUrl('/waiter/menu');
        break;
        case "cocinero":
          this.router.navigateByUrl('/chef/envoy');
        break;
        default:
          this.router.navigateByUrl('/admin/products');
      }
      this.load = false;
   })
  }
}
