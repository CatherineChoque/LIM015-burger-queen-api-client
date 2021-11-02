import { Component, OnInit } from '@angular/core';
import { DataProductsSelectedService } from 'src/app/services/data-products-selected.service';
import { AlertifyService } from 'src/app/services/alertify/alertify-service.service';
import {ApiService} from 'src/app/services/api.service'
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-container-sumary',
  templateUrl: './container-sumary.component.html',
  styleUrls: ['./container-sumary.component.css'],
})
export class ContainerSumaryComponent implements OnInit {
  constructor(
    public dataSelectedProducts: DataProductsSelectedService,
    private alertify: AlertifyService,
    private apiService: ApiService
  ) { }

  @ViewChild('formSumary')
  form!: NgForm;
  
  public loadGif = false;
  ngOnInit(): void { }

  ngOnChanges() { }

  cleanOrder() {
    this.dataSelectedProducts.cleanOrder();
    this.form.reset();
  }

  deleteProductSelected(id: string) {
    this.dataSelectedProducts.updateDataSelectProducts(id, 'delete');
    this.dataSelectedProducts.updateTotal();
  }

  updateQuantityProduct(id: string, action: string) {
    this.dataSelectedProducts.updateQuantity(id, action);
    this.dataSelectedProducts.updateTotal();
  }

  sendOrder(form: any) {
    this.loadGif = true;
    const totalProductsSelected = this.dataSelectedProducts.getDataSelectProducts().length;
    const total = this.dataSelectedProducts.getTotal();
    let productsSelected = this.dataSelectedProducts.getDataSelectProducts();
    
    if (totalProductsSelected == 0) {
      this.alertify.error('Necesita al menos un producto para enviar');
    } else {
      productsSelected = productsSelected
        .map((product: { _id: any; quantity: any;}) =>
          ({
            productId: product._id,
            qty: product.quantity,
          })
        );

      const objOrder = {
        userId: localStorage.getItem('idUserAuth'),
        client: `${form.nameClient}-${form.note}-${total}`,
        products: productsSelected,
      };

      this.apiService.addNewOrder(objOrder).subscribe(() => {
          this.loadGif = false;
          this.cleanOrder();
          this.alertify.success('Orden registrada');
      },error=>{
          this.loadGif = false;
          this.alertify.error('Error: '+error.error.message);
      });
    
    }
  }

}
