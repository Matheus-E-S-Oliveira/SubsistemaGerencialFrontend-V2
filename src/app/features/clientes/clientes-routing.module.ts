import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarClientesComponent } from './components/consultar-clientes/consultar-clientes.component';
import { ClienteInformacaoComponent } from './components/cliente-informacao/cliente-informacao.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultarClientesComponent
  },
  {
    path: 'detalhes/:id',
    component:ClienteInformacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
