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
  public dataProductsByPag:any = [];
  public loadGif = false;

  constructor(public apiService: ApiService, private alertify: AlertifyService) {
  }

  @ViewChild('formProduct')
  form!: NgForm;

  @ViewChild('modalClose')
  modal!: ElementRef;

  ngOnInit(): void {
    this.loadProducts(3)
  }

  loadProducts(numPag:number){
    this.apiService.getProductsAdmin(numPag).subscribe(dataProducts => {
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
      this.closeModal();// cerrar
      this.alertify.success('Creaste un nuevo producto'); // alert
    }, error => {
      this.loadGif = false;
      this.alertify.error('Error: ' + error.error.message);
    }
    );
   
  }

  clearForm(){
    this.form.reset();
  }

  //cerrar
  closeModal(): void {
    this.modal.nativeElement.click();
  }
  
}