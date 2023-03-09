import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  API_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  checaLogin(email: string, pass: string, lembrar: string) {
    const user = {
      email,
      pass,
      lembrar,
    };

    //console.log('Checa Login USER =>',user)

    //return this.httpClient.post<any>(this.API_URL+'/login2',user)//,{
    // return this.httpClient.post(this.API_URL+'/login2',user)
    this.httpClient.post(this.API_URL + '/login', user).subscribe({
      //res=>console.log('Cadastrado Login =>',res))
      next: (response) => {
        console.log(response);
      },
      error: (response) => {
        console.log('erro', response);
        console.log('erro', response.status);
      },
    });
  }

  gravaLogin(email: string, pass: string, lembrar: string) {
    const user = {
      email,
      pass,
      lembrar,
    };

    //console.log('Checa Login USER =>',user)

    //return this.httpClient.post<any>(this.API_URL+'/login2',user)//,{
    // return this.httpClient.post(this.API_URL+'/login2',user)
    this.httpClient.post(this.API_URL + '/login/create', user).subscribe({
      //res=>console.log('Cadastrado Login =>',res))
      next: (response) => {
        console.log(response);
      },
      error: (response) => {
        console.log('erro', response);
      },
    });
    //responseType:'json',
    //headers:{'Content-Type':'application/json'}
    //})*/
  }
}
