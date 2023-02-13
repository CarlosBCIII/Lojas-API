import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroEmpregadoComponent } from './cadastro-empregado/cadastro-empregado.component';
import { CaixaDiarioComponent } from './caixa-diario/caixa-diario.component';

const routes: Routes = [
  {path:'/employees/create', component: CadastroEmpregadoComponent},//localhost:4200/employee/create,
  {path:'/employees/busca/id/:codigo', component: CadastroEmpregadoComponent},
  {path:'/employees/busca/registro/:registro', component: CadastroEmpregadoComponent},
  {path:'/employees', component: CadastroEmpregadoComponent},
  {path:'/employees/deletar/id/:codigo', component: CadastroEmpregadoComponent},
  {path:'/employees/deletar/registro/:registro', component: CadastroEmpregadoComponent},
  {path:'/employees/atualiza/id/:codigo', component: CadastroEmpregadoComponent},
  {path:'/employees/atualiza/registro/:registro', component: CadastroEmpregadoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
