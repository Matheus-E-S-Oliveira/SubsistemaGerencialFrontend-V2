import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarClientesComponent } from './components/consultar-clientes/consultar-clientes.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultarClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
