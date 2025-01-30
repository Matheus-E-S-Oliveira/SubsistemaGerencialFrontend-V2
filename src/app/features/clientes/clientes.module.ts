import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { NgxMaskDirective } from 'ngx-mask';

import { ClientesRoutingModule } from './clientes-routing.module';
import { AngularMaterialModule } from '../../shared/modules/angular-material.module';

import { ConsultarClientesComponent } from './components/consultar-clientes/consultar-clientes.component';
import { PipeModule } from '../../shared/modules/pipe.module';
import { ClienteInformacaoComponent } from './components/cliente-informacao/cliente-informacao.component';
import { ModelComponentsModule } from "../../shared/models/views/model-components.module";


@NgModule({
  declarations: [
    ConsultarClientesComponent,
    ClienteInformacaoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PipeModule,
    AngularMaterialModule,
    ClientesRoutingModule,
    NgxMaskDirective,
    ReactiveFormsModule,
    ModelComponentsModule
]
})
export class ClientesModule { }
