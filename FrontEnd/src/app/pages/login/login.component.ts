import { Userlogin } from 'src/app/interfaces/userlogin';
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



