import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CadastroempregadoService {

  API_URL= environment.apiUrl;

  constructor(private http:HttpClient) {}

  createNewUser(nome:string,email:string,inicio_contrato:string){
    const user={
      nome,
      email,
      inicio_contrato
    }
    //console.log(user)

    this.http.post(this.API_URL+'/employees', user).subscribe({//res=>console.log('Cadastrado Login =>',res))
      next:(response)=>{
        console.log(response)

      },
      error:(response)=>{
        console.log('erro',response)
      }

    })//(res=>console.log('Cadastrado'))
  }





}
