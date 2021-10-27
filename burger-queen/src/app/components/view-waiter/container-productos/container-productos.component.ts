import { Component, OnInit } from '@angular/core';
import { DataProductsSelectedService } from 'src/app/services/data-products-selected.service';
import { ApiService} from 'src/app/services/api.service';

@Component({
  selector: 'app-container-productos',
  templateUrl: './container-productos.component.html',
  styleUrls: ['./container-productos.component.css']
})
export class ContainerProductosComponent implements OnInit {

  public productsSelected;
  public dataProducts:any=[];

  public optionsCategory:any=[
    {id: 1,nameCategory:'Desayunos',value:false,icon:"fas fa-mug-hot"},
    {id: 2, nameCategory:'Hamburguesas',value:false,icon:"fas fa-mug-hot"},
    {id: 3, nameCategory:'Almuerzos',value:false,icon:"fas fa-mug-hot"},
    {id: 4,nameCategory:'Bebidas',value:false,icon:"fas fa-mug-hot"},
    {id: 5,nameCategory:'Otros',value:false,icon:"fas fa-mug-hot"},
  ];
  
  indexAnterior:number=-1

  constructor(public dataSelectedProducts: DataProductsSelectedService, public apiService: ApiService) {
    this.productsSelected = dataSelectedProducts.getDataSelectProducts();
  }

  loadProducts(nameCategory:string,index:number){
    let dataByCategory:any=[];
    this.apiService.getProducts().subscribe(dataProducts => {
      dataProducts.forEach(dataProduct => {
        dataByCategory.push(dataProduct);
      })
      dataByCategory=dataByCategory.filter((product: { type: string; }) => product.type == nameCategory)
      this.dataProducts=dataByCategory;
    }); 

    this.optionsCategory[index].value = true;

    if(this.indexAnterior!=-1){
      this.optionsCategory[this.indexAnterior].value = false;
      this.indexAnterior=index;
    }

  }

  ngOnInit(): void {
    this.loadProducts('Desayunos',1);
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
