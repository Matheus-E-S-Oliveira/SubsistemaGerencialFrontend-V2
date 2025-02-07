import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { ContratoService } from '../../../../shared/services/contrato.service';

@Component({
  selector: 'app-grafico-situacao-contrato',
  standalone: false,
  templateUrl: './grafico-situacao-contrato.component.html',
  styleUrl: './grafico-situacao-contrato.component.scss'
})
export class GraficoSituacaoContratoComponent {

data: any;

  options: any;

  platformId = inject(PLATFORM_ID);
  dados: any;
  label: any;
  resposta: any;

  constructor(private cd: ChangeDetectorRef, private contratoService: ContratoService) { }

  ngOnInit() {
    this.getSituacaoContrato();
  }

  getSituacaoContrato() {
    this.contratoService.contratoData$.subscribe((response) => {
      if(response){
        this.dados = [response.ativo, response.inativo, response.gratuito, response.teste, response.indefinido]
        this.initChart();
      }
    })
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const textColor = "#424242"

      this.data = {
        labels: ["Ativo", "Inativo", "Gratuito", "Teste", "Inderteminado"],  // Define os rótulos com as situações das licenças
        datasets: [
          {
            data: this.dados,  // Dados de quantidade de licenças para cada situação
            backgroundColor: [
              'rgba(255, 99, 132, 1)',   // Vermelho
              'rgba(54, 162, 235, 1)',   // Azul Claro
              'rgba(255, 206, 86, 1)',   // Amarelo
              'rgba(75, 192, 192, 1)',   // Verde Claro
              'rgba(153, 102, 255, 1)',  // Roxo
            ],
            
            hoverBackgroundColor: [
              'rgba(255, 99, 132, 0.8)',   // Vermelho com transparência
              'rgba(54, 162, 235, 0.8)',   // Azul Claro com transparência
              'rgba(255, 206, 86, 0.8)',   // Amarelo com transparência
              'rgba(75, 192, 192, 0.8)',   // Verde Claro com transparência
              'rgba(153, 102, 255, 0.8)',  // Roxo com transparência
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
            onHover: function (event: { native: { target: { style: { cursor: string; }; }; }; }, legendItem: any, legend: { chart: any; }) {
              const chart = legend.chart;
              const tooltip = chart.tooltip;

              if (legendItem) {
                event.native.target.style.cursor = 'pointer';
              }
            },
            onLeave: function (event: { native: { target: { style: { cursor: string; }; }; }; }, legendItem: any, legend: any) {
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

