import { Component, OnInit } from '@angular/core';
import { ApiService} from 'src/app/services/api.service';
import { AlertifyService } from 'src/app/services/alertify/alertify-service.service';
import { ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-container-users',
  templateUrl: './container-users.component.html',
  styleUrls: ['./container-users.component.css']
})
export class ContainerUsersComponent implements OnInit {
  public dataUsersByPag:any = [];
  public loadGif = false;
  public emailTemporal = '';
  public titleModal = 'Crear usuario';
  private idTemporal = '';
  formUser!: FormGroup;
  p: number = 1;

  constructor(private fb: FormBuilder, public apiService: ApiService, private alertify: AlertifyService) { }

  @ViewChild('modalClose')
  modal!: ElementRef;

  @ViewChild('modalCloseDelete')
  modalDelete!: ElementRef;

  ngOnInit(): void {
    this.loadUsers();
    this.formUser = this.fb.group({
      email: [''],
      password: [''],
      selectRol: ['']
     });
  }

  loadUsers(){
    this.apiService.getUsersAdmin().subscribe(dataUsers => {
      this.dataUsersByPag = dataUsers.sort((a:any,b:any) => {
        return <any>new Date(b.updatedAt) - <any>new Date(a.updatedAt);
      })
    }); 
  }

  validatePassword(password:string){
    const regex = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    return regex.test(password);
  }

  createAndEditUser(){
    this.loadGif = true;
    const dataUser = this.formUser.getRawValue();
    const validate = this.validatePassword(dataUser.password);
    let objRoles;
    if(validate){
      objRoles = (dataUser.selectRol == "admin")?{admin:true}:{admin:false, name:dataUser.selectRol}
      const objUser = {
        email:dataUser.email,
        password:dataUser.password,
        roles:objRoles
      }

      if(this.idTemporal == ''){
        this.apiService.addNewUser(objUser).subscribe(() => {
          this.responseSuccess('Creaste un nuevo usuario')
        },error => {
          this.alertify.error(error.error.message);
          this.loadGif = false;
        });
      }else{
        this.apiService.updateUser(objUser,this.idTemporal).subscribe(() => {
          this.responseSuccess('Editado con exito')
        }, error => {
          this.loadGif = false;
          this.alertify.error('Error: ' + error.error.message);
        });
      }
      

    }else{
      this.loadGif = false;
      this.alertify.error('Error: La contraseña debe tener al menos 8 carateres, un dígito, una minúscula, una mayúscula y un caracter especial.');
    }
  }

  responseSuccess(message:string){
    this.clearForm();
    this.loadGif = false; // parar gif
    this.modal.nativeElement.click();// cerrar
    this.alertify.success(message); // alert
    this.loadUsers();
  }

  clearForm(){
    this.formUser.reset();
    this.idTemporal = '';
  }

  //eliminar usuario
  deleteUser(id: any, email:string){
    this.idTemporal = id;
    this.emailTemporal = email;
  }

  confirmDelete(){
    this.apiService.deleteUserAdmin(this.idTemporal).subscribe(() => {
      this.modalDelete.nativeElement.click();// cerrar
      this.alertify.success('Eliminaste un usuario'); // alert
      this.loadUsers();
    },error => {
      this.alertify.error('Error: ' + error.error.message);
    });
  }

  cleanModalDelete(){
    this.idTemporal = '';
    this.emailTemporal = '';
  }

  loadDataUser(objUser:any){
    this.idTemporal = objUser._id;
    this.titleModal = 'Editar Usuario';
    const rol = (objUser.roles.admin)? 'admin':objUser.roles.name;
    this.formUser.patchValue({
      email: objUser.email,
      password: objUser.password,
      selectRol: rol
     });
  }

  openModal(){
    this.titleModal = 'Crear nuevo Usuario';
  }

}
