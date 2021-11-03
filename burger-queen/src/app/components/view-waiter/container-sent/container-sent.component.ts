import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AlertifyService } from 'src/app/services/alertify/alertify-service.service';
@Component({
  selector: 'app-container-sent',
  templateUrl: './container-sent.component.html',
  styleUrls: ['./container-sent.component.css']
})
export class ContainerSentComponent implements OnInit {

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
