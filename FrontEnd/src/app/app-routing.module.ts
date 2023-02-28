import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { CadastroEmpregadoComponent } from './pages/cadastro-empregado/cadastro-empregado.component';
import { CaixaDiarioComponent } from './pages/caixa-diario/caixa-diario.component';

const routes: Routes = [

  {path:'usuario/cadastro', component: CadastroEmpregadoComponent},
  {path:'caixa', component: CaixaDiarioComponent},
  //{path:'', component:AppComponent}
  /*{path:'', redirectTo:'usuario', pathMatch: 'full'},
  {path:'usuario',
    loadChildren:()=> import('./pages/pages.routes').then( routes =>routes.PagesRoutes)}*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
