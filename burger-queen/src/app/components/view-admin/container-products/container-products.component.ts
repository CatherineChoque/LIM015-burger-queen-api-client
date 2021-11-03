import { Component, OnInit } from '@angular/core';
import { ApiService} from 'src/app/services/api.service';
import { AlertifyService } from 'src/app/services/alertify/alertify-service.service';
import { ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-container-products',
  templateUrl: './container-products.component.html',
  styleUrls: ['./container-products.component.css'],
})
export class ContainerProductsComponent implements OnInit {
  formProduct!: FormGroup;
  p: number = 1;
  public dataProductsByPag:any = [];
  public loadGif = false;
  private urldefault = 'https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_960_720.png';
  public picture = this.urldefault;
  private idTemporal = '';
  public nameTemporal = '';
  public titleModal = 'Crear producto';

  constructor(private fb: FormBuilder, public apiService: ApiService, private alertify: AlertifyService) {
  }
  // cerrar el modal de create and edit
  @ViewChild('modalClose')
  modal!: ElementRef;

  // 
  @ViewChild('modalCloseDelete')
  modalDelete!: ElementRef;

  ngOnInit(): void {
    this.loadProducts();
    this.formProduct = this.fb.group({
      name: [''],
      type: [''],
      price: [''],
      image: ['']
     });
  }

  loadProducts(){
    this.apiService.getProductsAdmin().subscribe(dataProducts => {
      this.dataProductsByPag = dataProducts.sort((a,b) => {
        return <any>new Date(b.updatedAt) - <any>new Date(a.updatedAt);
      })
      //console.log(this.dataProductsByPag);
    }); 
  }

  createAndEditproduct(){
      this.loadGif = true;
      const objProduct = this.formProduct.getRawValue();
      if(this.idTemporal == ''){
        this.apiService.addNewProduct(objProduct).subscribe(() => {
          this.responseSuccess('Creaste un nuevo producto')
        }, error => {
          this.loadGif = false;
          this.alertify.error('Error: ' + error.error.message);
        });
      }else{
        this.apiService.updateProduct(objProduct,this.idTemporal).subscribe(() => {
          this.responseSuccess('Editado con exito')
        }, error => {
          this.loadGif = false;
          this.alertify.error('Error: ' + error.error.message);
        });
      }
      
  }

  responseSuccess(message:string){
    this.clearForm();
    this.loadGif = false; // parar gif
    this.modal.nativeElement.click();// cerrar
    this.alertify.success(message); // alert
    this.loadProducts();
  }
  
  clearForm(){
    this.formProduct.reset();
    this.idTemporal = '';
    this.picture = this.urldefault; //colocar image default de nuevo
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

  // cargar data para editar
  loadDataProduct(objProduct:any){
    this.idTemporal = objProduct._id;
    this.titleModal = 'Editar Producto';
    this.formProduct.patchValue({
      name: objProduct.name,
      type: objProduct.type,
      price: objProduct.price,
      image: objProduct.image
     });
     this.picture = objProduct.image;
  }

  openModal(){
    this.titleModal = 'Crear nuevo Producto';
  }
  
}