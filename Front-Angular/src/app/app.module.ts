import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroEmpregadoComponent } from './cadastro-empregado/cadastro-empregado.component';
import { CaixaDiarioComponent } from './caixa-diario/caixa-diario.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroEmpregadoComponent,
    CaixaDiarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
