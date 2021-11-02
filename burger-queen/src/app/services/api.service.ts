import { Injectable } from '@angular/core';

import { HttpClient,HttpParams } from '@angular/common/http';
import { ResponseLogin, ResponseGetUser} from '../response/response.login'
import { ResponseGetProducts } from '../response/response.products'
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { ResponseGetUsers } from '../response/response.users';
import {ResponseOrder } from '../response/response.order';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://burger-queen-v2.herokuapp.com/";
  direccion: string = "";

  constructor(private http: HttpClient) { }

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

  getUsersAdmin(numPag: number): Observable<ResponseGetUsers[]> {
    this.direccion = this.url + 'users?page=' + numPag;
    return this.http.get<ResponseGetUsers[]>(this.direccion);
  }


  postProductAdmin(form:any):Observable<ResponseGetProducts>{
    this.direccion=this.url + 'products';
    return this.http.post<ResponseGetProducts>(this.direccion, form);
  }
  /*
  deleteProductAdmin(id:any):Observable<any>{
    this.direccion=this.url + 'products'+id;
    return this.http.delete<ResponseGetProducts[]>(this.direccion);
  }*/

  addNewOrder(objOrder: any): Observable<any>{
    this.direccion = this.url + 'orders';
    return this.http.post<ResponseOrder[]>(this.direccion, objOrder)
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

}
