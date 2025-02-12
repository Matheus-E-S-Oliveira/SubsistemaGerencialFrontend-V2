import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaBoletosComponent } from './components/consulta-boletos/consulta-boletos.component';
import { BoletosTabManagerComponent } from './components/boletos-tab-manager/boletos-tab-manager.component';
import { ConsultaBoletosVencidasComponent } from './components/consulta-boletos-vencidas/consulta-boletos-vencidas.component';
import { ConsultaBoletosVencendoComponent } from './components/consulta-boletos-vencendo/consulta-boletos-vencendo.component';

const routes: Routes = [
  {
    path: '',
    component: BoletosTabManagerComponent,
    children: [
      { path: '', redirectTo: 'vencidos', pathMatch: 'full' },
      { path: 'vencidos', component: ConsultaBoletosVencidasComponent },
      { path: 'vencendo', component: ConsultaBoletosVencendoComponent },
    ]
  },
  {
    path: "consulta",
    component: ConsultaBoletosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoletosRoutingModule { }
