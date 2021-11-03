import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AlertifyService } from 'src/app/services/alertify/alertify-service.service';
@Component({
  selector: 'app-container-envoy',
  templateUrl: './container-envoy.component.html',
  styleUrls: ['./container-envoy.component.css']
})
export class ContainerEnvoyComponent implements OnInit {

  constructor(private serviceOrder: ApiService, private alertify: AlertifyService) { }
  public allOrders:any = [];
  public messageOrder='';
  ngOnInit(): void {
    this. getOrderbyStatus("pending");
  }

  getOrderbyStatus(status: string){
     this.serviceOrder.getOrders(status).subscribe(data => {
      this.messageOrder=(status=='pending')?'No hay ordenes Pendientes':'Estas al dia en tus ordenes';
      this.allOrders=data;
     })
  }

  changeStatusOrder(status:string,id:string){
    this.serviceOrder.updateStatusOrder(id,{status:status}).subscribe(() => {
      if(status=='preparing'){
        this.getOrderbyStatus("pending");
      }else{
        this.getOrderbyStatus("preparing");
      }
      this.alertify.success("Se cambio el estado de la Orden");
     })
  }
}
