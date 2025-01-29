import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FazendasRoutingModule } from './fazendas-routing.module';
import { ConsultarFazendasComponent } from './components/consultar-fazendas/consultar-fazendas.component';
import { AngularMaterialModule } from '../../shared/modules/angular-material.module';
import { PipeModule } from '../../shared/modules/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConsultarFazendasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FazendasRoutingModule,
    AngularMaterialModule,
    PipeModule,
    ReactiveFormsModule
  ]
})
export class FazendasModule { }
