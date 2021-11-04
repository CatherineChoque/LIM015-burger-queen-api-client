import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { ResponseLogin, ResponseGetUser} from '../models/response.login'
import { ResponseGetProducts } from '../models/response.products'
import { ResponseGetUsers } from '../models/response.users';
import {ResponseOrder } from '../models/response.order';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  url: string = "https://burger-queen-v2.herokuapp.com/";
  direccion: string = "";
  constructor(private http: HttpClient) { }
  
  
// ------------------------------ Auth User Login --------------------------------------

  loginByEmail(form: any): Observable<any> {
    this.direccion = this.url + 'auth';
    return this.http.post<ResponseLogin>(this.direccion, form);
  }

  getUserAuth(email: string): Observable<any> {
    this.direccion = this.url + 'users/' + email;
    return this.http.get<ResponseGetUser>(this.direccion)
    .pipe(
      map(user => {
        localStorage.setItem('idUserAuth', user._id);
        return user.roles
      }),map(roles =>(roles.admin)? "admin" : roles.name)
    );
  }


  // ------------------------------ Administracion Productos --------------------------------------

  getProductsWaiter(nameCategory: string): Observable<any> {
    this.direccion = this.url + 'products?limit=0';
    return this.http.get<ResponseGetProducts[]>(this.direccion)
      .pipe(
        map(product => product.filter(elm => elm.type == nameCategory))
      );
  }

  getProductsAdmin():Observable<ResponseGetProducts[]>{
    this.direccion=this.url + 'products?limit=0';
    return this.http.get<ResponseGetProducts[]>(this.direccion);
  }
  
  addNewProduct(form:any):Observable<any>{
    this.direccion=this.url + 'products';
    return this.http.post<ResponseGetProducts>(this.direccion, form);
  }

  updateProduct(form:any,id:string):Observable<any>{
    this.direccion=this.url + 'products/'+id;
    return this.http.put<ResponseGetProducts>(this.direccion, form);
  }
  
  deleteProductAdmin(id:any):Observable<any>{
    this.direccion = this.url + 'products/' + id;
    return this.http.delete<ResponseGetProducts>(this.direccion, id);
  }
  
  // ------------------------------ Administracion de Usuarios --------------------------------------

  getUsersAdmin(): Observable<any> {
    this.direccion = this.url + 'users?limit=0';
    return this.http.get<ResponseGetUsers[]>(this.direccion);
  }
  
  addNewUser(objUser:any):Observable<any>{
    this.direccion = this.url + 'users';
    return this.http.post<ResponseGetUser>(this.direccion, objUser);
  }

  updateUser(form:any,id:string):Observable<any>{
    this.direccion=this.url + 'users/'+ id;
    return this.http.put<ResponseGetProducts>(this.direccion, form);
  }

  deleteUserAdmin(id:any):Observable<any>{
    this.direccion = this.url + 'users/' + id;
    return this.http.delete<ResponseGetUsers>(this.direccion, id);
  }

  // ------------------------------ Administracion de Ordenes --------------------------------------

  addNewOrder(objOrder: any): Observable<any>{
    this.direccion = this.url + 'orders';
    return this.http.post<ResponseOrder[]>(this.direccion, objOrder);
  }

  getOrders(status:string): Observable<any>{
    this.direccion = this.url + 'orders?limit=0';
    return this.http.get<ResponseOrder[]>(this.direccion)
    .pipe(
      map(order => 
          order.filter(elm => {
          const client=elm.client.split("-");
          elm.client=client[0];
          elm.note=client[1];
          elm.total=client[2];
        return elm.status == status
      }))
    );
  }
  
  updateStatusOrder(id:string,status:any):Observable<any>{
    this.direccion=this.url + 'orders/'+ id;
    return this.http.put<ResponseOrder[]>(this.direccion, status);
  }

  getAllOrders(): Observable<any>{
    this.direccion = this.url + 'orders?limit=0';
    return this.http.get<ResponseOrder[]>(this.direccion)
    .pipe(
      map(order => 
          order.map(elm => {
          const client=elm.client.split("-");
          elm.client=client[0];
          elm.note=client[1];
          elm.total=client[2];
          return elm;
      }))
    );
    
  }



}
