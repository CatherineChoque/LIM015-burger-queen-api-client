import { Component, OnInit } from '@angular/core';
import { ApiService} from 'src/app/services/api.service';
import { AlertifyService } from 'src/app/services/alertify/alertify-service.service';
import { ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-container-products',
  templateUrl: './container-products.component.html',
  styleUrls: ['./container-products.component.css'],
})
export class ContainerProductsComponent implements OnInit {
  p: number = 1;
  public dataProductsByPag:any = [];
  public loadGif = false;
  /*arrayProduct: Object = {
    _id: '',
    name: '',
    price: 0,
    image: '',
    type: ''
  }*/

  constructor(public apiService: ApiService, private alertify: AlertifyService) {
  }

  @ViewChild('formProduct')
  form!: NgForm;

  @ViewChild('modalClose')
  modal!: ElementRef;

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts(){
    this.apiService.getProductsAdmin().subscribe(dataProducts => {
      this.dataProductsByPag = dataProducts.sort((a,b) => {
        return <any>new Date(b.updatedAt) - <any>new Date(a.updatedAt);
      })
      console.log(this.dataProductsByPag);
    }); 
  }

  createNewproduct(values:any){
      this.loadGif = true;
      this.apiService.postProductAdmin(values).subscribe(() => {
      this.clearForm();
      this.loadGif = false; // parar gif
      this.modal.nativeElement.click();// cerrar
      this.alertify.success('Creaste un nuevo producto'); // alert
      this.loadProducts();
    }, error => {
      this.loadGif = false;
      this.alertify.error('Error: ' + error.error.message);
    }
    );
   
  }
  
  clearForm(){
    this.form.reset();
  }

  //eliminar producto
  /*
  deleteProduct(id: any){
    this.removeItem(id)
    this.apiService.deleteProductAdmin(id).subscribe((response) => {
        this.arrayProduct = response
        this.loadProducts(3);
      }
    )
  }

  removeItem(id: any){
    let objIndex = this.dataProductsByPag.findIndex(((obj: any) => {
      obj._id === id;
    }));
    if(objIndex != -1){
      this.dataProductsByPag.splice(objIndex, 1)
    }
  }*/
  
}