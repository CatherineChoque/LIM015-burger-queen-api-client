import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AlertifyService } from 'src/app/services/alertify/alertify-service.service';
@Component({
  selector: 'app-container-ready',
  templateUrl: './container-ready.component.html',
  styleUrls: ['./container-ready.component.css']
})
export class ContainerReadyComponent implements OnInit {
  
  public allOrders:any = [];
  constructor(private serviceOrder: ApiService, private alertify: AlertifyService) { }
  
  ngOnInit(): void {
    this.getOrderbyStatus()
  }

  getOrderbyStatus(){
    this.serviceOrder.getOrders('delivering').subscribe(data => {
    this.allOrders=data;
   })
  }

  //terminar la orden
  finishOrder(id:string){
    this.serviceOrder.updateStatusOrder(id,{status:'delivered'}).subscribe(() => {
      this.getOrderbyStatus()
      this.alertify.success("Se finalizo la orden");
     })
  }

}
