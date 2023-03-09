import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  loginForm = new FormGroup({

    email:new FormControl<string>('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required]),
    lembrar:new FormControl<string>('', [Validators.required]),
    checkRemember:new FormControl(false, [Validators.required]),

  });


  constructor(private loginService:LoginService){

  }

  enviarLogin(){
    const informa=this.loginForm.value
    //console.log('INforma=>',informa)
    this.loginService.gravaLogin(informa.email!,informa.password!,informa.lembrar!)
     /*this.loginService.checaLogin(informa.email!,informa.password!).subscribe(res=>console.log('cadastrado=>',res))/**.subscribe({
      next:(response:any)=>{
        console.log(response)

      },
      error:(response)=>{
        console.log('erro',response)
      }

    })*/
  }

  checaLogin(){
    const informa=this.loginForm.value
    //console.log('INforma=>',informa)
    this.loginService.checaLogin(informa.email!,informa.password!,informa.lembrar!)
     /*this.loginService.checaLogin(informa.email!,informa.password!).subscribe(res=>console.log('cadastrado=>',res))/**.subscribe({
      next:(response:any)=>{
        console.log(response)

      },
      error:(response)=>{
        console.log('erro',response)
      }

    })*/
  }

}


//ID CLIENTE=> 435956396235-6sipf0onpmk8v64c89e7d9j6bk8ekjks.apps.googleusercontent.com
//
//Chave => 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
//
// Chave API=> AIzaSyAigmmeCwdWW_BPG-9Kw2W9DzhLnMljetc
