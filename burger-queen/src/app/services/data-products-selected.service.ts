import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProductsSelectedService {
  arrayData: any= [];
  total: number=0;
  
  getDataSelectProducts(){
    return this.arrayData;
  }

  updateDataSelectProducts(data:any,accion:string){
    if(accion=='add'){
      this.arrayData=[...this.arrayData,data];
      //console.log(this.arrayData,'aqui actualizando new')
    }else{ //entonces eliminamos el producto de la Tabla
      this.arrayData = this.arrayData.filter((product: { id: any; }) => product.id !== data);
      //console.log(this.arrayData,'aqui actualizando deleted')
    }
   
  }

  getTotal(){
    console.log(this.total,'total')
    return this.total.toFixed(2);
  }

  updateTotal(){
    if(this.arrayData.length == 0){
      this.total= 0;
    }else{
      this.total=0;
      this.arrayData.forEach((product: { price: any; }) => {
        this.total=this.total + Number(product.price);
      })
    }    
  }

  cleanOrder(){
    this.arrayData=[];
    this.total=0;
  }

  constructor() { }
}
