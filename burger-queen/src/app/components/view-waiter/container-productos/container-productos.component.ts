import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-container-productos',
  templateUrl: './container-productos.component.html',
  styleUrls: ['./container-productos.component.css']
})
export class ContainerProductosComponent implements OnInit {
// estado incial
  selectedProducts:string[] = [];
  @Input() tableSelectedProducts:any[] = [];
//  tableSelectedProducts:any[] = [];


  constructor() {
   }

  ngOnInit(): void {
  }

  // funcion que cambia el estado
  modifyProducts(infoProduct:string[]){
    if(this.selectedProducts.includes(infoProduct[0])){
      // remover
      this.selectedProducts = this.selectedProducts.filter(product => product !== infoProduct[0])
      this.tableSelectedProducts = this.tableSelectedProducts.filter(product => product.id !== infoProduct[0])
      console.log(this.tableSelectedProducts, 'nuevo despues de eliminado')
    }else{
      this.selectedProducts = [...this.selectedProducts, infoProduct[0]]
      console.log(infoProduct[1],'este es su nombre')
      // push a la tabla
      this.tableSelectedProducts = [...this.tableSelectedProducts, {
        id: infoProduct[0],
        name: infoProduct[1],
        quantity: 1,
        img: infoProduct[2],
        price: infoProduct[3]
      }]
      console.log(this.tableSelectedProducts, 'nuevo producto')
    }
  }
}
