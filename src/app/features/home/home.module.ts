import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ModelComponentsModule } from "../../shared/models/views/model-components.module";
import { CardsComponent } from './components/cards/cards.component';
import { KpisComponent } from './components/kpis/kpis.component';
import { GraficoFinaceiroComponent } from './components/grafico-finaceiro/grafico-finaceiro.component';
import { BaseChartDirective } from 'ng2-charts';
import { ChartModule } from 'primeng/chart';
import { GraficoSituacaoClienteComponent } from './components/grafico-situacao-cliente/grafico-situacao-cliente.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CardsComponent,
    KpisComponent,
    GraficoFinaceiroComponent,
    GraficoSituacaoClienteComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ModelComponentsModule,
    BaseChartDirective,
    ChartModule
  ]
})
export class HomeModule { }
