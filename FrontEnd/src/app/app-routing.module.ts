import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';

import { CadastroEmpregadoComponent } from './pages/cadastro-empregado/cadastro-empregado.component';
import { CaixaDiarioComponent } from './pages/caixa-diario/caixa-diario.component';
import { LoginComponent } from './pages/login/login.component';
import { OauthGuard } from './pages/oauth/oauth.guard';

const routes: Routes = [

  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent, canActivate:[OauthGuard]},
  {path:'usuario/cadastro', component: CadastroEmpregadoComponent},
  {path:'caixa', component: CaixaDiarioComponent},
  {path:'admin', component:AdminComponent},

  //{path:'', component:AppComponent}
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  //{path:'usuario',
    //loadChildren:()=> import('./pages/pages.routes').then( routes =>routes.PagesRoutes)}*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
