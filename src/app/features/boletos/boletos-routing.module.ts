import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaBoletosComponent } from './components/consulta-boletos/consulta-boletos.component';

const routes: Routes = [
  {
    path: "",
    component: ConsultaBoletosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoletosRoutingModule { }
