import { Component, OnInit } from '@angular/core';
import { ApiService} from 'src/app/services/api.service';


@Component({
  selector: 'app-container-products',
  templateUrl: './container-products.component.html',
  styleUrls: ['./container-products.component.css']
})
export class ContainerProductsComponent implements OnInit {
  public dataProductsByPag:any = [];

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.loadProducts(1)
  }

  loadProducts(numPag:number){
    this.apiService.getProductsAdmin(numPag).subscribe(dataProducts => {
      this.dataProductsByPag = dataProducts.sort((a,b) => {
        return <any>new Date(b.updatedAt) - <any>new Date(a.updatedAt);
      })
    }); 
  }

}
