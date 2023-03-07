import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { UsuarioInterface } from 'src/app/interfaces/InterfaceUsuario';
import { UsuarioClass } from 'src/app/shared/components/models/usuario';

@Component({
  selector: 'app-cadastro-empregado',
  templateUrl: './cadastro-empregado.component.html',
  styleUrls: ['./cadastro-empregado.component.css'],

})
export class CadastroEmpregadoComponent implements OnInit{


  cadastroForm = new FormGroup({
    nome: new FormControl('',[Validators.required,Validators.minLength(3)]),
    inicioC: new FormControl('',[Validators.required]),
    finalC: new FormControl('',[Validators.required]),
    salario: new FormControl('',[Validators.required]),
    meta: new FormControl('',[Validators.required]),
    metaAtiva: new FormControl('',[Validators.required]),
    nivelUsuario: new FormControl('',[Validators.required]),
    usuarioAtivo: new FormControl('',[Validators.required]),


  });


  constructor() {  }

  ngOnInit() {



    //this.createForm(new UsuarioClass());
  }

  submitForm(){
    console.log(this.cadastroForm.value)
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

  cadastroEmpregadoSubmit(){}

}
