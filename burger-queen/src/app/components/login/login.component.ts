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

  public loadGif = false;

  constructor(private serviceLogin: ApiService, private router: Router, private alertify: AlertifyService) { }

  ngOnInit(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
  }

  sendEmailPassword(values: any) {
    this.loadGif = true;
    this.serviceLogin.loginByEmail(values).subscribe(data => {
      localStorage.setItem('token', data.token);
      this.getInfoUser(values.email);
    }, error => {
      this.loadGif = false;
      this.alertify.error('Error: ' + error.error.message);
    });
  }

  getInfoUser(email: string) {
    this.serviceLogin.getUserAuth(email).subscribe(rol => {
      localStorage.setItem('rol', rol);
      switch (rol) {
        case "mesero":
          this.router.navigateByUrl('/waiter/menu');
          break;
        case "cocinero":
          this.router.navigateByUrl('/chef/envoy');
          break;
        default:
          this.router.navigateByUrl('/admin/products')
        }
    });

    this.loadGif = false;

  }
}
