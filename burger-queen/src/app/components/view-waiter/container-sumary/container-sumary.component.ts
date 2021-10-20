import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { DataProductsSelectedService } from 'src/app/services/data-products-selected.service';

@Component({
  selector: 'app-container-sumary',
  templateUrl: './container-sumary.component.html',
  styleUrls: ['./container-sumary.component.css']
})
export class ContainerSumaryComponent implements OnInit {
  constructor(public dataSelectedProducts: DataProductsSelectedService) { 
    
  }
  
  ngOnInit(): void {
  }

  ngOnChanges(){
  }

  cancelOrder() {
    this.dataSelectedProducts.cleanOrder();
  }

  deleteProductSelected(id:string){
   this.dataSelectedProducts.updateDataSelectProducts(id,'delete');
   this.dataSelectedProducts.updateTotal();
  }

  updateQuantityProduct(id:string,action: string){
     this.dataSelectedProducts.updateQuantity(id,action);
     this.dataSelectedProducts.updateTotal();
  }
}
