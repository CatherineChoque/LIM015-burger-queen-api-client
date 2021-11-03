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
  private urldefault = 'https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_960_720.png';
  public picture = this.urldefault;
  private idTemporal = '';
  public nameTemporal = '';

  constructor(public apiService: ApiService, private alertify: AlertifyService) {
  }

  @ViewChild('formProduct')
  form!: NgForm;

  @ViewChild('modalClose')
  modal!: ElementRef;

  @ViewChild('modalCloseDelete')
  modalDelete!: ElementRef;

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts(){
    this.apiService.getProductsAdmin().subscribe(dataProducts => {
      this.dataProductsByPag = dataProducts.sort((a,b) => {
        return <any>new Date(b.updatedAt) - <any>new Date(a.updatedAt);
      })
      //console.log(this.dataProductsByPag);
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
    });
  }
  
  clearForm(){
    this.form.reset();
  }
  
  renderImage(url:string){
    if(url == ''){
      this.picture = this.urldefault;
    }else{
      fetch(url).then(res => {
        if(res.status == 404 || res.status == 500){
          this.picture = this.urldefault;
          this.alertify.error('Error: enlace roto');
        }else{
          this.picture = url;
        }
      }).catch(() => {
        this.picture = this.urldefault;
        this.alertify.error('Error: hubo un error al validar el enlace');
      })
    }
  }

  //eliminar producto
  deleteProduct(id: any, name:string){
    this.idTemporal = id;
    this.nameTemporal = name;
    //console.log(id);
  }

  confirmDelete(){
    this.apiService.deleteProductAdmin(this.idTemporal).subscribe(() => {
      this.modalDelete.nativeElement.click();// cerrar
      this.alertify.success('Eliminaste un producto'); // alert
      this.loadProducts();
    },error => {
      this.alertify.error('Error: ' + error.error.message);
    });
  }

  cleanModalDelete(){
    this.idTemporal = '';
    this.nameTemporal = '';
  }
  
}