import { Component, OnInit } from '@angular/core';
import { DataProductsSelectedService } from 'src/app/services/data-products-selected.service';

@Component({
  selector: 'app-container-productos',
  templateUrl: './container-productos.component.html',
  styleUrls: ['./container-productos.component.css']
})
export class ContainerProductosComponent implements OnInit {

  public dataProducts;
  public productsSelected;

  constructor(public dataSelectedProducts: DataProductsSelectedService) {
    this.dataProducts = dataSelectedProducts.getAllDataProducts();
    this.productsSelected = dataSelectedProducts.getDataSelectProducts();
  }

  ngOnInit(): void {
  }
  
  modifyProducts(objProduct:any){
   
    if(this.productsSelected.includes(objProduct)){
        this.dataSelectedProducts.updateDataSelectProducts(objProduct.id,'delete'); //aqui le paso el id
        this.dataSelectedProducts.updateTotal();
    }else{
        objProduct.quantity=1; 
        objProduct.subTotal=(objProduct.price).toFixed(2); 

        this.dataSelectedProducts.updateDataSelectProducts(objProduct,'add'); //aqui le paso el id
        this.dataSelectedProducts.updateTotal();
    } 
    //Volvemos a llamar los que estan selecionados, para que actualice en la DOM
    this.productsSelected = this.dataSelectedProducts.getDataSelectProducts();

  }

  
}
