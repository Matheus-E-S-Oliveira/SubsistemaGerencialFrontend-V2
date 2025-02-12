import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicencasRoutingModule } from './licencas-routing.module';
import { ConsultaLicencasVencidasComponent } from './components/consulta-licencas-vencidas/consulta-licencas-vencidas.component';
import { ConsultaLicencasVencendoComponent } from './components/consulta-licencas-vencendo/consulta-licencas-vencendo.component';
import { AngularMaterialModule } from '../../shared/modules/angular-material.module';
import { PipeModule } from '../../shared/modules/pipe.module';
import { ModelComponentsModule } from '../../shared/models/views/model-components.module';
import { LicencasTabManagerComponent } from './components/licencas-tab-manager/licencas-tab-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';


@NgModule({
  declarations: [
    ConsultaLicencasVencidasComponent,
    ConsultaLicencasVencendoComponent,
    LicencasTabManagerComponent
  ],
  imports: [
    CommonModule,
    LicencasRoutingModule,
    AngularMaterialModule,
    PipeModule,
    ModelComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ]
})
export class LicencasModule { }
