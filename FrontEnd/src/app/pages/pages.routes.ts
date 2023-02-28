import {Routes} from '@angular/router';
import {CadastroEmpregadoComponent} from './cadastro-empregado/cadastro-empregado.component';
import { CaixaDiarioComponent } from './caixa-diario/caixa-diario.component';
import { DespesasComponent } from './despesas/despesas.component';
import { HomeComponent } from './home/home.component';

export const PagesRoutes: Routes =[

    {path:'', component: HomeComponent},
    {path:'cadastro', component: CadastroEmpregadoComponent},
    {path:'caixa', component: CaixaDiarioComponent},
    {path:'despesas', component: DespesasComponent}

];
