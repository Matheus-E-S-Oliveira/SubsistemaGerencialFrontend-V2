import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeModule } from '../../modules/pipe.module';
import { AngularMaterialModule } from '../../modules/angular-material.module';

import { NgPipesModule } from 'ngx-pipes'

import { PaginatorCarrocelComponent } from './components/paginator-carrocel/paginator-carrocel.component';
import { CardComponent } from './components/card/card.component';
import { KpisMenoresComponent } from './components/kpis-menores/kpis-menores.component';
import { KpisMaioresComponent } from './components/kpis-maiores/kpis-maiores.component';



@NgModule({
  declarations: [
    PaginatorCarrocelComponent,
    CardComponent,
    KpisMenoresComponent,
    KpisMaioresComponent,
  ],
  imports: [
    CommonModule,
    PipeModule,
    AngularMaterialModule,
    NgPipesModule
  ],
  exports: [
    PaginatorCarrocelComponent,
    CardComponent,
    KpisMenoresComponent,
    KpisMaioresComponent
  ]
})
export class ModelComponentsModule { }
