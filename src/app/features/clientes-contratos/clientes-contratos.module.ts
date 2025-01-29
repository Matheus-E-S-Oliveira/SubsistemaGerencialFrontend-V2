import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesContratosRoutingModule } from './clientes-contratos-routing.module';
import { ConsultarClientesContratosComponent } from './components/consultar-clientes-contratos/consultar-clientes-contratos.component';


@NgModule({
  declarations: [
    ConsultarClientesContratosComponent
  ],
  imports: [
    CommonModule,
    ClientesContratosRoutingModule
  ]
})
export class ClientesContratosModule { }
