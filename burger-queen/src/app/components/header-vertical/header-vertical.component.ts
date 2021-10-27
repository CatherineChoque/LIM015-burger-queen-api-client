import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-vertical',
  templateUrl: './header-vertical.component.html',
  styleUrls: ['./header-vertical.component.css']
})
export class HeaderVerticalComponent implements OnInit {
  public rol = localStorage.getItem("rol");
  public optionMenu = false;
  public optionSent = false;
  public optionReady  = false;
  public optionEnvoy  = false;
  public optionProducts = false;
  public optionUsers = false;
  public optionRecord = false;

  constructor( private router: Router) { 

  }

  ngOnInit(): void {
    if(this.rol == "admin"){
      this.optionProducts = true;
    } else if(this.rol == "mesero") {
      this.optionMenu = true;
    } else {
      this.optionEnvoy = true;
    }
  }
  
  modifyOption(option:string){
    console.log(option);
    switch(option){
      case 'menu':
      this.optionMenu = true;
      this.optionSent = false;
      this.optionReady  = false;
      this.optionEnvoy = false;
      this.optionProducts =false;
      this.optionUsers = false;
      this.optionRecord =false;
      break;
      case 'sent':
      this.optionMenu = false;
      this.optionSent = true;
      this.optionReady  = false;
      this.optionEnvoy = false;
      this.optionProducts =false;
      this.optionUsers = false;
      this.optionRecord =false;
      break;
      case 'ready':
      this.optionMenu = false;
      this.optionSent = false;
      this.optionReady  = true;
      this.optionEnvoy = false;
      this.optionProducts =false;
      this.optionUsers = false;
      this.optionRecord =false;
      break;
      case 'envoy':
      this.optionMenu = false;
      this.optionSent = false;
      this.optionReady  = false;
      this.optionEnvoy = true;
      this.optionProducts =false;
      this.optionUsers = false;
      this.optionRecord =false;
      break;
      case 'products':
      this.optionMenu = false;
      this.optionSent = false;
      this.optionReady  = false;
      this.optionEnvoy = false;
      this.optionProducts = true;
      this.optionUsers = false;
      this.optionRecord =false;
      break;
      case 'users':
      this.optionMenu = false;
      this.optionSent = false;
      this.optionReady  = false;
      this.optionEnvoy = false;
      this.optionProducts = false;
      this.optionUsers = true;
      this.optionRecord = false;
      break;
      case 'record':
      this.optionMenu = false;
      this.optionSent = false;
      this.optionReady  = false;
      this.optionEnvoy = false;
      this.optionProducts = false;
      this.optionUsers = false;
      this.optionRecord = true;
      break;/*
      case 'menu':
      default:
      this.optionMenu = true;
      this.optionSent = false;
      this.optionReady  = false;
      this.optionEnvoy = false;
      this.optionProducts =false;
      this.optionUsers = false;
      this.optionRecord =false;*/
    }
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    this.router.navigateByUrl('/login');
  }

}
