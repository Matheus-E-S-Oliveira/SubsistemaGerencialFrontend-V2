import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeModule } from '../../modules/pipe.module';
import { AngularMaterialModule } from '../../modules/angular-material.module';

import { NgPipesModule } from 'ngx-pipes'

import { PaginatorCarrocelComponent } from './components/paginator-carrocel/paginator-carrocel.component';



@NgModule({
  declarations: [
    PaginatorCarrocelComponent,
  ],
  imports: [
    CommonModule,
    PipeModule,
    AngularMaterialModule,
    NgPipesModule
  ],
  exports: [
    PaginatorCarrocelComponent
  ]
})
export class ModelComponentsModule { }
