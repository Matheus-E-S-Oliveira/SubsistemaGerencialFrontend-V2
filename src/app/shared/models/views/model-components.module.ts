import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeModule } from '../../modules/pipe.module';
import { AngularMaterialModule } from '../../modules/angular-material.module';

import { NgPipesModule } from 'ngx-pipes'

import { PaginatorCarrocelComponent } from './components/paginator-carrocel/paginator-carrocel.component';
import { CardComponent } from './components/card/card.component';
import { KpisMenoresComponent } from './components/kpis-menores/kpis-menores.component';
import { KpisMaioresComponent } from './components/kpis-maiores/kpis-maiores.component';
import { PainelComponent } from './components/painel/painel.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PaginatorCarrocelComponent,
    CardComponent,
    KpisMenoresComponent,
    KpisMaioresComponent,
    PainelComponent,
  ],
  imports: [
    CommonModule,
    PipeModule,
    AngularMaterialModule,
    NgPipesModule,
    RouterModule
  ],
  exports: [
    PaginatorCarrocelComponent,
    CardComponent,
    KpisMenoresComponent,
    KpisMaioresComponent,
    PainelComponent
  ]
})
export class ModelComponentsModule { }
