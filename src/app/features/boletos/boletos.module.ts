import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoletosRoutingModule } from './boletos-routing.module';
import { ConsultaBoletosComponent } from './components/consulta-boletos/consulta-boletos.component';
import { AngularMaterialModule } from '../../shared/modules/angular-material.module';
import { PipeModule } from '../../shared/modules/pipe.module';
import { ModelComponentsModule } from '../../shared/models/views/model-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConsultaBoletosComponent
  ],
  imports: [
    CommonModule,
    BoletosRoutingModule,
    AngularMaterialModule,
    PipeModule,
    ModelComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BoletosModule { }
