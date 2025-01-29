import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesContratosRoutingModule } from './clientes-contratos-routing.module';
import { ConsultarClientesContratosComponent } from './components/consultar-clientes-contratos/consultar-clientes-contratos.component';
import { AngularMaterialModule } from '../../shared/modules/angular-material.module';
import { PipeModule } from '../../shared/modules/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConsultarClientesContratosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientesContratosRoutingModule,
    AngularMaterialModule,
    PipeModule
  ]
})
export class ClientesContratosModule { }
