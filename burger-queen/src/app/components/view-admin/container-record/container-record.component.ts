import { Component, OnInit } from '@angular/core';
import { ApiService} from 'src/app/services/api.service';


@Component({
  selector: 'app-container-record',
  templateUrl: './container-record.component.html',
  styleUrls: ['./container-record.component.css']
})
export class ContainerRecordComponent implements OnInit {
  public dataRecordsByPag:any = [];
  public dataProductDetails:any=[];
  public totalTemporal=0;
  public notaTemporal='';
  public clienteTempotal='';
  p: number = 1;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.loadRecords()
  }

  loadRecords(){
    this.apiService.getAllOrders().subscribe(dataRecords => {
      this.dataRecordsByPag = dataRecords;
      console.log(dataRecords);
    }); 
  }

  loadDetails(dataProducts:any){
     
     this.clienteTempotal=dataProducts.client;
     this.totalTemporal=dataProducts.total;
     this.notaTemporal=dataProducts.note;
     const detalle= dataProducts.products.map((product: any) =>({
       name:product.productId.name,
       price:product.productId.price,
       subtotal: Number(product.productId.price)*Number(product.qty),
       cantidad:product.qty,
     }))
     this.dataProductDetails=detalle;
  }

}
