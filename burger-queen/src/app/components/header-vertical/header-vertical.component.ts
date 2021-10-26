import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-vertical',
  templateUrl: './header-vertical.component.html',
  styleUrls: ['./header-vertical.component.css']
})
export class HeaderVerticalComponent implements OnInit {
  public optionMenu = true;
  public optionSent = false;
  public optionReady  = false;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  
  modifyOption(option:string){
    console.log(option);
    switch(option){
      case 'sent':
      this.optionMenu = false;
      this.optionSent = true;
      this.optionReady  = false;
      break;
      case 'ready':
      this.optionMenu = false;
      this.optionSent = false;
      this.optionReady  = true;
      break;
      case 'menu':
      default:
      this.optionMenu = true;
      this.optionSent = false;
      this.optionReady  = false;
    }
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
