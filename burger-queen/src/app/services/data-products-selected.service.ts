import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProductsSelectedService {
  arraySeletectProducts: any = [];
  total: number = 0;

  getAllDataProducts() {
    const data = [
      {
        id: '1',
        name: 'Jugo de Fresa',
        img: '../../../../assets/img/prueba/jugodefresa.jpg',
        price: 5.50
      },
      {
        id: '2',
        name: 'Jugo de Mango',
        img: '../../../../assets/img/prueba/jugodemango.jpg',
        price: 4.20
      },
      {
        id: '3',
        name: 'Jugo de Papaya',
        img: '../../../../assets/img/prueba/jugodepapaya.jpg',
        price: 3.80
      },
      {
        id: '4',
        name: 'Cafe con Latte y Vainilla',
        img: '../../../../assets/img/prueba/cafelatte.jpg',
        price: 5.40
      }
    ]
    return data;
  }

  getDataSelectProducts() {
    return this.arraySeletectProducts;
  }
  
   //se encarga de eleminar o agregar productos en el sumary
  updateDataSelectProducts(data: any, action: string) {
    if (action == 'add') {
      this.arraySeletectProducts = [...this.arraySeletectProducts, data];
    } else { //entonces eliminamos el producto de la Tabla
      this.arraySeletectProducts = this.arraySeletectProducts.filter((product: { id: any; }) => product.id !== data);
      //console.log(this.arraySeletectProducts,'aqui actualizando deleted')
    }
  }

  getTotal() {
    return this.total.toFixed(2);
  }

  updateTotal() {
    if (this.arraySeletectProducts.length == 0) {
      this.total = 0;
    } else {
      this.total = 0;
      this.arraySeletectProducts.forEach((product: { price: any; quantity: any }) => {
        this.total = this.total + Number(product.price) * Number(product.quantity);
      })
    }
  }

  cleanOrder() {
    this.arraySeletectProducts = [];
    this.total = 0;
  }

  //donde action puede aumentar la cantidad o disminuir
  updateQuantity(id: string, action: string) {

    const objIndex = this.arraySeletectProducts.findIndex(((obj: { id: string; }) => obj.id == id));
    const quantityBefore = this.arraySeletectProducts[objIndex].quantity;
    const price = this.arraySeletectProducts[objIndex].price;

    let newQuantity = Number(quantityBefore);
    
    if (action == 'add') {
      newQuantity = newQuantity + 1;
    } else {
      if (quantityBefore > 1) {
        newQuantity = newQuantity - 1;
      }
    }
    const newSubTotal=newQuantity*Number(price)
    this.arraySeletectProducts[objIndex].quantity = newQuantity;
    this.arraySeletectProducts[objIndex].subTotal =  newSubTotal.toFixed(2);
  }


  constructor() { }
}
