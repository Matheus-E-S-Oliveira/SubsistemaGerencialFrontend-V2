import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicencasTabManagerComponent } from './components/licencas-tab-manager/licencas-tab-manager.component';
import { ConsultaLicencasVencidasComponent } from './components/consulta-licencas-vencidas/consulta-licencas-vencidas.component';
import { ConsultaLicencasVencendoComponent } from './components/consulta-licencas-vencendo/consulta-licencas-vencendo.component';

const routes: Routes = [
  {
    path: '',
    component: LicencasTabManagerComponent,
    children: [
      { path: '', redirectTo: 'vencidas', pathMatch: 'full' },
      { path: 'vencidas', component: ConsultaLicencasVencidasComponent },
      { path: 'vencendo', component: ConsultaLicencasVencendoComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicencasRoutingModule { }
