import { CadastroempregadoService } from './cadastroempregado.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { UsuarioInterface } from 'src/app/interfaces/interface-usuario';
//import { UsuarioClass } from 'src/app/shared/components/models/usuario';

@Component({
  selector: 'app-cadastro-empregado',
  templateUrl: './cadastro-empregado.component.html',
  styleUrls: ['./cadastro-empregado.component.css'],

})
export class CadastroEmpregadoComponent{ //implements OnInit {
  cadastroForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    inicioContrato: new FormControl('', [Validators.required]),
    finalContrato: new FormControl('', [Validators.required]),
    salario: new FormControl('', [Validators.required]),
    metaID: new FormControl('', [Validators.required]),
    metaAtiva: new FormControl(false),
    tipo: new FormControl('', [Validators.required]),
    ativo: new FormControl(false),
  });

  ///d0/M0/0000
  constructor(private cadastroService:CadastroempregadoService) {}

  ngOnInit() {
    //this.createForm(new UsuarioClass());
  }

  submitForm() {
    const valor = {
      ...this.cadastroForm.value,
      salario: parseFloat(this.cadastroForm.controls.salario.value!)
    } as UsuarioInterface;

    this.createNewUser(valor.nome,valor.email,valor.inicioContrato)
    //console.log(valor);
  }

  createNewUser(nome:string,email:string,inicio_contrato:string){
        this.cadastroService.createNewUser(nome,email,inicio_contrato)
  }

  /*createForm(usuario: UsuarioClass) {
    this.cadastroForm = new FormGroup({
      nome: new FormControl(usuario.nome,[Validators.required]),
      tipo: new FormControl(usuario.tipo),

    })
  }

  cadastroEmpregadoSubmit(){
    console.log('Enviando form')
  }*/


}
