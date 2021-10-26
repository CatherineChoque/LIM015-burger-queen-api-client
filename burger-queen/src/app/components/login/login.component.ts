import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import {ResponseGetUser} from '../../response/response.login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  infoUser = new Array<ResponseGetUser>(); //hace instancia hacia la repuesta que te da api ej. [{_id:..,email:..}]

  constructor(private serviceLogin:ApiService, private router: Router) { }
  
  ngOnInit(): void {
  }

  sendEmailPassword(values: any) {
   this.serviceLogin.loginByEmail(values).subscribe(data => {
     localStorage.setItem('token', data.token);
     this.getInfoUser(values.email); 
   });
  }

  getInfoUser(email:string){
    let rol;
    this.serviceLogin.getUserAuth(email).subscribe( response => {
    this.infoUser = [...response]
    console.log(this.infoUser,'respuseta')
   })
  }
}
