import { DistribuicaoPlanosApiService } from './../../../../core/apis/endpoints/distribuicao-planos/distribuicao-planos.api.service';
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-grafico-distrubuicao-cliente-planos',
  standalone: false,

  templateUrl: './grafico-distrubuicao-cliente-planos.component.html',
  styleUrl: './grafico-distrubuicao-cliente-planos.component.scss'
})
export class GraficoDistrubuicaoClientePlanosComponent {
  data: any;
  dados: any;
  options: any;
  platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef, private distribuicaoPlanosApiService: DistribuicaoPlanosApiService) { }

  ngOnInit() {
    this.getDistribuicaoPorPlanos();
  }

  getDistribuicaoPorPlanos() {
    this.distribuicaoPlanosApiService.getDados()
      .pipe(take(1))
      .subscribe((response) => {
        this.dados = [response.planoIndefinido, response.planoMensal, response.planoAnual, response.planoGratuito, response.planoTeste]
        this.initChart();
      })
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const textColor = "#424242"

      this.data = {
        labels: ["Indefinido", "Mensal", "Anual", "Gratuito", "Teste"],  // Define os rótulos com as situações das licenças
        datasets: [
          {
            data: this.dados,  // Dados de quantidade de licenças para cada situação
            backgroundColor: [
              'rgba(255, 165, 0, 1)',  // Laranja
              'rgba(128, 0, 128, 1)',  // Roxo
              'rgba(0, 255, 255, 1)',  // Ciano
              'rgba(255, 105, 180, 1)',  // Rosa
              'rgba(139, 69, 19, 1)'   // Marrom
            ],
            hoverBackgroundColor: [
              'rgba(255, 165, 0, 0.8)',  // Laranja
              'rgba(128, 0, 128, 0.8)',  // Roxo
              'rgba(0, 255, 255, 0.8)',  // Ciano
              'rgba(255, 105, 180, 0.8)',  // Rosa
              'rgba(139, 69, 19, 0.8)'   // Marrom
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
