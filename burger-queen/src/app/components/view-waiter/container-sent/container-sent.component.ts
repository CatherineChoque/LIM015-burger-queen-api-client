import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AlertifyService } from 'src/app/services/alertify/alertify-service.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-container-sent',
  templateUrl: './container-sent.component.html',
  styleUrls: ['./container-sent.component.css']
})
export class ContainerSentComponent implements OnInit {

  constructor(private serviceOrder: ApiService, private alertify: AlertifyService) { }
  public allOrders:any = [];
  private idTemporal='';
  public clientTemporal='';
  public optionTabMenssage='';
 
  @ViewChild('modalCloseDelete')
  modalDelete!: ElementRef;

  ngOnInit(): void {
    this.getOrderbyStatus("pending");
  }
 
  getOrderbyStatus(status: string){
      this.serviceOrder.getOrders(status).subscribe(data => {
      this.allOrders=data;
      this.optionTabMenssage=(status=="pending")?' Estas al día en tus ordenes':'No hay ordenes en preparacion';
     })
  }

  cleanModalDelete(){
    this.idTemporal='';
    this.clientTemporal='';
  }

  cancelOrder(id:string,client:string){
    this.idTemporal=id;
    this.clientTemporal=client;
  }
  //Cancelar la orden
  confirmDelete(){
    this.serviceOrder.updateStatusOrder(this.idTemporal,{status:'canceled'}).subscribe(() => {
      this.getOrderbyStatus("pending");
      this.modalDelete.nativeElement.click();// cerrar
      this.alertify.success("Se cancelo la Orden");
     })
  }
  
}
