
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxMaskDirective,NgxMaskPipe,provideNgxMask} from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CadastroEmpregadoComponent } from './pages/cadastro-empregado/cadastro-empregado.component';
import { CaixaDiarioComponent } from './pages/caixa-diario/caixa-diario.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MetasComponent } from './pages/metas/metas.component';
import { DespesasComponent } from './pages/despesas/despesas.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';

import { LoginService } from './pages/login/login.service';
import { CadastroempregadoService } from './pages/cadastro-empregado/cadastroempregado.service';
import { OauthComponent } from './pages/oauth/oauth.component';



//import { bootstrap } from 'bootstrap'
//import { createPopper } from '@popperjs/core';



@NgModule({
  declarations: [
    AppComponent,
    CadastroEmpregadoComponent,
    CaixaDiarioComponent,
    AdminComponent,
    MetasComponent,
    DespesasComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    LoginComponent,
    OauthComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxMaskDirective,
    NgxMaskPipe


  ],
  exports:[],
  providers: [provideNgxMask(), LoginService,CadastroempregadoService],
  bootstrap: [AppComponent]
})

export class AppModule {

  //constructor(library: FaIconLibrary) {}
}
