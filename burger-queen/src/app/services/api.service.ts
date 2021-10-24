import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://api-burguerqueen-am27th.herokuapp.com/";

  constructor(private http:HttpClient) { }

  loginByEmail(email:string, password:string){
    let direccion = this.url + "auth";
    return this.http.post
  }

}
