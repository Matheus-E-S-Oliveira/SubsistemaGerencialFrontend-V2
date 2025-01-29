import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgxMaskDirective } from 'ngx-mask';

import { AngularMaterialModule } from '../modules/angular-material.module';

import { LayoutPageComponent } from './layout-page/layout-page.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutLoadingComponent } from './layout-loading/layout-loading.component';
import { LayoutMenuLateralComponent } from './layout-menu-lateral/layout-menu-lateral.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LayoutMenuLateralComponent,
    LayoutLoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
  ],
  exports: [
    LayoutPageComponent,
    LayoutLoadingComponent
  ]
})
export class LayoutModule { }
