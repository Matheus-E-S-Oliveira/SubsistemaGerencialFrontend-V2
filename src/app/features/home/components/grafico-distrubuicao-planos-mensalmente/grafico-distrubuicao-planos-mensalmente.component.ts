import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { ReceitaService } from '../../../../shared/services/receita.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-grafico-distrubuicao-planos-mensalmente',
  standalone: false,

  templateUrl: './grafico-distrubuicao-planos-mensalmente.component.html',
  styleUrl: './grafico-distrubuicao-planos-mensalmente.component.scss'
})
export class GraficoDistrubuicaoPlanosMensalmenteComponent {
  data: any;
  options: any;
  platformId = inject(PLATFORM_ID);
  label: any;
  Indefinido: number[] = [];
  Mensal: number[] = [];
  Anual: number[] = [];
  Gratuito: number[] = [];
  Teste: number[] = [];
  Total: number[] = [];
  constructor(private cd: ChangeDetectorRef, private receitaService: ReceitaService) { }

  ngOnInit() {
    this.getDistruibuicaoPlanosMensal()
  }

  getDistruibuicaoPlanosMensal() {
    this.receitaService.receitaData$.subscribe((response) => {
      if (response) {
        this.label = Object.keys(response.licencasCompradasPorMes);
        const licencasPorMes = response.licencasCompradasPorMes;

        this.label.forEach((mesAno: string) => {
          const licencasMes = licencasPorMes[mesAno];
          let totalMes = 0;

          Object.keys(licencasMes).forEach((key) => {
            const statusLicenca = Number(key);
            const valor = licencasMes[statusLicenca];

            switch (statusLicenca) {
              case 0: this.Indefinido.push(valor); break;
              case 1: this.Mensal.push(valor); break;
              case 2: this.Anual.push(valor); break;
              case 3: this.Gratuito.push(valor); break;
              case 4: this.Teste.push(valor); break;
            }
            totalMes += valor;
          });
          this.Total.push(totalMes);
        });
      }
      this.initChart();
    })

  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const textColor = '#424242';
      const textColorSecondary = '#424242';
      const surfaceBorder = '#606060';

      this.data = {
        labels: this.label,
        datasets: [
          {
            type: 'line',
            label: 'Indefinido',
            borderColor: 'rgba(0, 204, 255, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            data: this.Indefinido
          },
          {
            type: 'line',
            label: 'Mensal',
            borderColor: 'rgba(255, 105, 180, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            data: this.Mensal
          },
          {
            type: 'line',
            label: 'Anual',
            borderColor: 'rgba(255, 165, 0, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            data: this.Anual
          },
          {
            type: 'line',
            label: 'Gratuito',
            borderColor: 'rgba(34, 193, 195, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            data: this.Gratuito
          },
          {
            type: 'line',
            label: 'Teste',
            borderColor: 'rgba(253, 87, 34, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            data: this.Teste
          },
          {
            type: 'line', // Linha de total
            label: 'Total',
            borderColor: '#8E44AD',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            data: this.Total
          }
        ]
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
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
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder
            }
          }
        }
      };
      this.cd.detectChanges();
      this.cd.markForCheck()
    }
  }
}
