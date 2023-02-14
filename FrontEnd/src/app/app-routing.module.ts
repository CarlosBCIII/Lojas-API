import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroEmpregadoComponent } from './cadastro-empregado/cadastro-empregado.component';
import { CaixaDiarioComponent } from './caixa-diario/caixa-diario.component';

const routes: Routes = [

  {path:'employees/emp', component: CadastroEmpregadoComponent},
  {path:'caixa', component: CaixaDiarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
