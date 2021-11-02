import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { ResponseLogin, ResponseGetUser} from '../response/response.login'
import { ResponseGetProducts, ResponsePostProducts} from '../response/response.products'
import { Observable } from 'rxjs';
import { ResponseGetUsers } from '../response/response.users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://burger-queen-v2.herokuapp.com/";
  direccion:string = "";

  constructor(private http:HttpClient) { }

  loginByEmail(form:any):Observable<ResponseLogin>{
    this.direccion=this.url + 'auth';
    return  this.http.post<ResponseLogin>(this.direccion, form)   ;
  }
 
  getUserAuth(email:string):Observable<ResponseGetUser[]>{
    this.direccion=this.url + 'users/'+email;
    return this.http.get<ResponseGetUser[]>(this.direccion);
  }

  getProductsWaiter():Observable<ResponseGetProducts[]>{
    this.direccion=this.url + 'products?limit=0';
    return this.http.get<ResponseGetProducts[]>(this.direccion);
  }

  getProductsAdmin():Observable<ResponseGetProducts[]>{
    this.direccion=this.url + 'products?limit=0';
    return this.http.get<ResponseGetProducts[]>(this.direccion);
  }

  getUsersAdmin(numPag:number):Observable<ResponseGetUsers[]>{
    this.direccion=this.url + 'users?page='+numPag;
    return this.http.get<ResponseGetUsers[]>(this.direccion);
  }

  postProductAdmin(form:any):Observable<ResponsePostProducts>{
    this.direccion=this.url + 'products';
    return this.http.post<ResponsePostProducts>(this.direccion, form);
  }
  /*
  deleteProductAdmin(id:any):Observable<any>{
    this.direccion=this.url + 'products'+id;
    return this.http.delete<ResponseGetProducts[]>(this.direccion);
  }*/
}
