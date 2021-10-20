import { Component, OnInit} from '@angular/core';
import { DataProductsSelectedService } from 'src/app/services/data-products-selected.service';

@Component({
  selector: 'app-container-productos',
  templateUrl: './container-productos.component.html',
  styleUrls: ['./container-productos.component.css']
})
export class ContainerProductosComponent implements OnInit {
// estado incial
  selectedProducts:string[] = [];
 // tableSelectedProducts:any[] = [];

  constructor(private dataSelectedProducts: DataProductsSelectedService) {
  }

  ngOnInit(): void {
  }

  // funcion que cambia el estado
  modifyProducts(infoProduct:string[]){
    if(this.selectedProducts.includes(infoProduct[0])){
      // remover
      this.selectedProducts = this.selectedProducts.filter(product => product !== infoProduct[0])
      this.dataSelectedProducts.updateDataSelectProducts(infoProduct[0],'delete'); //aqui le paso el id

      this.dataSelectedProducts.updateTotal();
      
    }else{
      this.selectedProducts = [...this.selectedProducts, infoProduct[0]]

      this.dataSelectedProducts.updateDataSelectProducts({
        id: infoProduct[0],
        name: infoProduct[1],
        quantity: 1,
        img: infoProduct[2],
        price: infoProduct[3]
      },'add'); //aqui le paso el id
      
      this.dataSelectedProducts.updateTotal();
     
    }
  }
}
