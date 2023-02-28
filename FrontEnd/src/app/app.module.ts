import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule,NgbDropdownConfig, NgbDropdownModule,NgbNavConfig,NgbNavModule,NgbProgressbarModule,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { CadastroEmpregadoComponent } from './pages/cadastro-empregado/cadastro-empregado.component';
import { CaixaDiarioComponent } from './pages/caixa-diario/caixa-diario.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MetasComponent } from './pages/metas/metas.component';
import { DespesasComponent } from './pages/despesas/despesas.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    NgbProgressbarModule,
    NgbDropdownModule,
    NgbNavModule,



  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

  //constructor(library: FaIconLibrary) {}
}
