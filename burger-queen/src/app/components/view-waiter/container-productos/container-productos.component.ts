import { Component, OnInit } from '@angular/core';
import { DataProductsSelectedService } from 'src/app/services/data-products-selected.service';
import { ApiService} from 'src/app/services/api.service';
import {filter,map,tap,toArray} from "rxjs/operators";
@Component({
  selector: 'app-container-productos',
  templateUrl: './container-productos.component.html',
  styleUrls: ['./container-productos.component.css']
})
export class ContainerProductosComponent implements OnInit {

  public productsSelected:any = [];
  public dataProducts:any=[];
  public optionsCategory:any=[
    {id: 0,nameCategory:'Desayunos',value:false,icon:"fas fa-mug-hot"},
    {id: 1, nameCategory:'Burger',value:false,icon:"fas fa-hamburger"},
    {id: 2, nameCategory:'Almuerzos',value:false,icon:"fas fa-drumstick-bite"},
    {id: 3,nameCategory:'Bebidas',value:false,icon:"fas fa-glass-whiskey"},
    {id: 4,nameCategory:'Otros',value:false,icon:"fas fa-utensils"},
  ];
  
  indexAnterior:number=-1

  constructor(public dataSelectedProducts: DataProductsSelectedService, public apiService: ApiService) {
  }
  
  ngOnInit(): void {
    this.loadProducts('Desayunos',0);
    this.productsSelected = this.dataSelectedProducts.getDataSelectProducts();
  }
   
  loadProducts(nameCategory:string,index:number){
    this.apiService.getProductsWaiter(nameCategory)
    .subscribe(data => {
      this.dataProducts=data;
      console.log(this.productsSelected);
    }); 
    this.changeOptionCategory(index)
  }

  /*Para actualizar la categoria selecionada en la DOM (pintar color naranja) */
  changeOptionCategory(index:number){
    this.optionsCategory[index].value = true;
    if(this.indexAnterior!=-1){
      this.optionsCategory[this.indexAnterior].value = false;
    }
    this.indexAnterior=index;
  }
  
  modifyProducts(objProduct:any){
   
    if(this.productsSelected.includes(objProduct)){
        this.dataSelectedProducts.updateDataSelectProducts(objProduct._id,'delete'); //aqui le paso el id
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
