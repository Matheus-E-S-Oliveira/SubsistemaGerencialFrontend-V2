import { DashboardApiService } from './../../../../core/apis/endpoints/dashboard/dashboard.api.service';
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-grafico-distrubuicao-clientes-forma-pagamento',
  standalone: false,

  templateUrl: './grafico-distrubuicao-clientes-forma-pagamento.component.html',
  styleUrl: './grafico-distrubuicao-clientes-forma-pagamento.component.scss'
})
export class GraficoDistrubuicaoClientesFormaPagamentoComponent {
  data: any;
  dados: any;
  options: any;
  platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef, private dashboardApiService: DashboardApiService) { }

  ngOnInit() {
    this.getDistribuicaoPorPlanos();
  }

  getDistribuicaoPorPlanos() {
    this.dashboardApiService.getDistribuicaoFP()
      .pipe(take(1))
      .subscribe((response) => {
        this.dados = [response.formaPagamentoIndefinido, response.formaPagamentoDinheiro, response.formaPagamentoCartaoCredito,
          response.formaPagamentoPix, response.formaPagamentoBoleto
        ]
        this.initChart();
      })
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const textColor = "#424242"

      this.data = {
        labels: ["Indefinido", "Dinheiro", "Cartão Crédito", "Pix", "Boleto"],
        datasets: [
          {
            data: this.dados,  // Dados de quantidade de licenças para cada situação
            backgroundColor: [
              'rgba(243, 156, 18, 1)', // Cor 1
              'rgba(22, 160, 133, 1)', // Cor 2
              'rgba(41, 128, 185, 1)', // Cor 3
              'rgba(142, 68, 173, 1)', // Cor 4
              'rgba(211, 84, 0, 1)'    // Cor 5
            ],            
            hoverBackgroundColor: [
              'rgba(243, 156, 18, 0.8)', // Cor 1
              'rgba(22, 160, 133, 0.8)', // Cor 2
              'rgba(41, 128, 185, 0.8)', // Cor 3
              'rgba(142, 68, 173, 0.8)', // Cor 4
              'rgba(211, 84, 0, 0.8)'    // Cor 5
            ]            
          }
        ]
      };

      this.options = {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              color: textColor
            },
            onHover: function(event: { native: { target: { style: { cursor: string; }; }; }; }, legendItem: any, legend: { chart: any; }) {
              const chart = legend.chart;
              const tooltip = chart.tooltip;
      
              if (legendItem) {
                event.native.target.style.cursor = 'pointer';
              }
            },
            onLeave: function(event: { native: { target: { style: { cursor: string; }; }; }; }, legendItem: any, legend: any) {
              event.native.target.style.cursor = 'default';
            }
          }
        }
      };
      this.cd.markForCheck()
      this.cd.detectChanges()
    }

  }
}
