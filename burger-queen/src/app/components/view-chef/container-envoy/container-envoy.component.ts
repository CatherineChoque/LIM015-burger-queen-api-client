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

  ngOnInit(): void {
    this. getOrderbyStatus("pending");
  }

  getOrderbyStatus(status: string){
     this.serviceOrder.getOrders(status).subscribe(data => {
      this.allOrders=data;
     })
  }
}
