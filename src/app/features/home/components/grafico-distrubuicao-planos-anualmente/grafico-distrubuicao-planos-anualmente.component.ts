import { take } from 'rxjs';
import { DistribuicaoPlanosApiService } from './../../../../core/apis/endpoints/distribuicao-planos/distribuicao-planos.api.service';
import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-grafico-distrubuicao-planos-anualmente',
  standalone: false,
  
  templateUrl: './grafico-distrubuicao-planos-anualmente.component.html',
  styleUrl: './grafico-distrubuicao-planos-anualmente.component.scss'
})
export class GraficoDistrubuicaoPlanosAnualmenteComponent {
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
  constructor(private cd: ChangeDetectorRef, private distribuicaoPlanosApiService: DistribuicaoPlanosApiService) { }

  ngOnInit() {
    this.getDistruibuicaoPlanosAnual()
  }
  
  getDistruibuicaoPlanosAnual() {
    this.distribuicaoPlanosApiService.getDado()
    .pipe(take(1))
    .subscribe((response) => {
      this.label = Object.keys(response.licencasPorAno)
      const licencasPorAno = response.licencasPorAno;
      
      this.label.forEach((mesAno: string) => {
        const licencasMes = licencasPorAno[mesAno];
        let totalMes = 0;

        Object.keys(licencasMes).forEach((key) => {
          const statusLicenca = Number(key);
          const valor = licencasMes[statusLicenca];

          if (statusLicenca === 0) {
            this.Indefinido.push(valor);
          } else if (statusLicenca === 1) {
            this.Mensal.push(valor);
          } else if (statusLicenca === 2) {
            this.Anual.push(valor);
          } else if (statusLicenca === 3) {
            this.Gratuito.push(valor);
          } else if (statusLicenca === 4) {
            this.Teste.push(valor);
          }
          totalMes += valor;
        });
        this.Total.push(totalMes);
      });

      // this.receita = this.label.map((mesAno: string | number) => {
      //   const licencasMes = licencasPorAno[mesAno];
      //   return Object.values(licencasMes).reduce((sum, count) => sum + count, 0);
      // });
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
            borderColor: 'rgba(255, 165, 0, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            data: this.Indefinido
          },
          {
            type: 'line',
            label: 'Mensal',
            borderColor: 'rgba(128, 0, 128, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            data: this.Mensal
          },
          {
            type: 'line',
            label: 'Anual',
            borderColor: 'rgba(255, 105, 180, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            data: this.Anual
          },
          {
            type: 'line',
            label: 'Gratuito',
            borderColor: 'rgba(100, 149, 237, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            data: this.Gratuito
          },
          {
            type: 'line',
            label: 'Teste',
            borderColor: 'rgba(75, 0, 130, 1)',
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
