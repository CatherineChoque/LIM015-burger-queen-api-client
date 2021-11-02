import { Component, OnInit } from '@angular/core';
import { ApiService} from 'src/app/services/api.service';
import { AlertifyService } from 'src/app/services/alertify/alertify-service.service';
import { ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-container-users',
  templateUrl: './container-users.component.html',
  styleUrls: ['./container-users.component.css']
})
export class ContainerUsersComponent implements OnInit {
  p: number = 1;
  public dataUsersByPag:any = [];
  public loadGif = false;

  constructor(public apiService: ApiService, private alertify: AlertifyService) { }

  @ViewChild('formUser')
  form!: NgForm;

  @ViewChild('modalClose')
  modal!: ElementRef;

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers(){
    this.apiService.getUsersAdmin().subscribe(dataUsers => {
      this.dataUsersByPag = dataUsers.sort((a:any,b:any) => {
        return <any>new Date(b.updatedAt) - <any>new Date(a.updatedAt);
      })
    }); 
  }

  createNewUser(form:any){
    this.loadGif = true;
    const regex = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    const validate = regex.test(form.password);
    let objRoles;
    if(validate){
      objRoles = (form.selectRol == "admin")?{admin:true}:{admin:false, name:form.selectRol}
      const objUser = {
        email:form.email,
        password:form.password,
        roles:objRoles
      }
      this.apiService.addNewUser(objUser).subscribe(() => {
        this.loadGif = false;
        this.clearForm();
        this.modal.nativeElement.click();// cerrar
        this.alertify.success('Creaste un nuevo usuario'); // alert
        this.loadUsers();
      },error => {
        this.alertify.error(error.error.message);
        this.loadGif = false;
      });

    }else{
      this.loadGif = false;
      this.alertify.error('Error: La contraseña debe tener al menos 8 carateres, un dígito, una minúscula, una mayúscula y un caracter especial.');
    }
  }

  clearForm(){
    this.form.reset();
  }

}
