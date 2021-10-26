import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseLogin, ResponseGetUser} from '../response/response.login'
import { Observable } from 'rxjs';

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

}
