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
import { GraficoSituacaolicencaComponent } from './components/grafico-situacao-licenca/grafico-situacao-licenca.component';
import { GraficoDistrubuicaoClientePlanosComponent } from './components/grafico-distrubuicao-cliente-planos/grafico-distrubuicao-cliente-planos.component';
import { GraficoDistrubuicaoPlanosAnualmenteComponent } from './components/grafico-distrubuicao-planos-anualmente/grafico-distrubuicao-planos-anualmente.component';
import { GraficoDistrubuicaoClientesFormaPagamentoComponent } from './components/grafico-distrubuicao-clientes-forma-pagamento/grafico-distrubuicao-clientes-forma-pagamento.component';
import { GraficoDistrubuicaoPlanosMensalmenteComponent } from './components/grafico-distrubuicao-planos-mensalmente/grafico-distrubuicao-planos-mensalmente.component';
import { GraficoSitucaoClientesComponent } from './components/grafico-situcao-clientes/grafico-situcao-clientes.component';
import { GraficoAssinadoPortalComponent } from './components/grafico-assinado-portal/grafico-assinado-portal.component';
import { GraficoSituacaoContratoComponent } from './components/grafico-situacao-contrato/grafico-situacao-contrato.component';
import { AngularMaterialModule } from '../../shared/modules/angular-material.module';

@NgModule({
  declarations: [
    DashboardComponent,
    CardsComponent,
    KpisComponent,
    GraficoFinaceiroComponent,
    GraficoSituacaolicencaComponent,
    GraficoDistrubuicaoClientePlanosComponent,
    GraficoDistrubuicaoPlanosAnualmenteComponent,
    GraficoDistrubuicaoClientesFormaPagamentoComponent,
    GraficoDistrubuicaoPlanosMensalmenteComponent,
    GraficoSitucaoClientesComponent,
    GraficoAssinadoPortalComponent,
    GraficoSituacaoContratoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ModelComponentsModule,
    AngularMaterialModule,
    BaseChartDirective,
    ChartModule
  ]
})
export class HomeModule { }
