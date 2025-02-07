import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { ClienteService } from '../../../../shared/services/cliente.service';

@Component({
  selector: 'app-grafico-situcao-clientes',
  standalone: false,
  templateUrl: './grafico-situcao-clientes.component.html',
  styleUrl: './grafico-situcao-clientes.component.scss'
})
export class GraficoSitucaoClientesComponent {
  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);
  dados: any;
  label: any;
  resposta: any;

  constructor(private cd: ChangeDetectorRef, private clienteService: ClienteService) { }

  ngOnInit() {
    this.getSituacaoLicenca();
  }

  getSituacaoLicenca() {
    this.clienteService.ClienteData$.subscribe((response) => {
      if (response) {
        this.dados = [response.clienteAtivos, response.clienteInativos, response.clienteInderteminados]
        this.initChart();
      }
    })
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const textColor = "#424242"

      this.data = {
        labels: ["Ativo", "Inativo", "Inderteminado"],  // Define os rótulos com as situações das licenças
        datasets: [
          {
            data: this.dados,  // Dados de quantidade de licenças para cada situação
            backgroundColor: [
              'rgba(34, 193, 195, 1)',  // Verde-azulado
              'rgba(253, 187, 45, 1)',  // Laranja
              'rgba(233, 30, 99, 1)',   // Rosa
            ],
            
            hoverBackgroundColor: [
              'rgba(34, 193, 195, 0.8)',  // Verde-azulado com transparência
              'rgba(253, 187, 45, 0.8)',  // Laranja com transparência
              'rgba(233, 30, 99, 0.8)',   // Rosa com transparência
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
