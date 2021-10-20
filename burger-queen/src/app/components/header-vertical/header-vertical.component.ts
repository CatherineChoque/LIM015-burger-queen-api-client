import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-vertical',
  templateUrl: './header-vertical.component.html',
  styleUrls: ['./header-vertical.component.css']
})
export class HeaderVerticalComponent implements OnInit {
  public optionMenu = true;
  public optionSent = false;
  public optionReady  = false;

  constructor() { }

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

}
