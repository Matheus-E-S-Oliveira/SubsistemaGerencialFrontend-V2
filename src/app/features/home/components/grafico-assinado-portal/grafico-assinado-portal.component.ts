import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { ContratoService } from '../../../../shared/services/contrato.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-grafico-assinado-portal',
  standalone: false,
  templateUrl: './grafico-assinado-portal.component.html',
  styleUrl: './grafico-assinado-portal.component.scss'
})
export class GraficoAssinadoPortalComponent {
data: any;

  options: any;

  platformId = inject(PLATFORM_ID);
  dados: any;
  label: any;
  resposta: any;

  constructor(private cd: ChangeDetectorRef, private contartoService: ContratoService) { }

  ngOnInit() {
    this.getSituacaoLicenca();
  }

  getSituacaoLicenca() {
    this.contartoService.contratoData$.subscribe((response) => {
      if (response) {
        this.dados = [response.assindo, response.nAssinado]
        this.initChart();
      }
    })
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const textColor = "#424242"

      this.data = {
        labels: ["Sim", "Não"],  // Define os rótulos com as situações das licenças
        datasets: [
          {
            data: this.dados,  // Dados de quantidade de licenças para cada situação
            backgroundColor: [
              'rgba(255, 99, 132, 1)',   // Vermelho
              'rgba(54, 162, 235, 1)',   // Azul Claro
            ],
            
            hoverBackgroundColor: [
              'rgba(255, 99, 132, 0.8)',   // Vermelho com transparência
              'rgba(54, 162, 235, 0.8)',   // Azul Claro com transparência
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
