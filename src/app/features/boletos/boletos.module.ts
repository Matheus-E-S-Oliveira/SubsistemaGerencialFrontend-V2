import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoletosRoutingModule } from './boletos-routing.module';
import { ConsultaBoletosComponent } from './components/consulta-boletos/consulta-boletos.component';
import { AngularMaterialModule } from '../../shared/modules/angular-material.module';
import { PipeModule } from '../../shared/modules/pipe.module';
import { ModelComponentsModule } from '../../shared/models/views/model-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { ConsultaBoletosVencidasComponent } from './components/consulta-boletos-vencidas/consulta-boletos-vencidas.component';
import { ConsultaBoletosVencendoComponent } from './components/consulta-boletos-vencendo/consulta-boletos-vencendo.component';
import { BoletosTabManagerComponent } from './components/boletos-tab-manager/boletos-tab-manager.component';


@NgModule({
  declarations: [
    ConsultaBoletosComponent,
    ConsultaBoletosVencidasComponent,
    ConsultaBoletosVencendoComponent,
    BoletosTabManagerComponent
  ],
  imports: [
    CommonModule,
    BoletosRoutingModule,
    AngularMaterialModule,
    PipeModule,
    ModelComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ]
})
export class BoletosModule { }
