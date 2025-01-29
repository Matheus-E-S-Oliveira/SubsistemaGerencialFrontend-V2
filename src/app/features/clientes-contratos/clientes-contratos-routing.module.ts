import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarClientesContratosComponent } from './components/consultar-clientes-contratos/consultar-clientes-contratos.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultarClientesContratosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesContratosRoutingModule { }
