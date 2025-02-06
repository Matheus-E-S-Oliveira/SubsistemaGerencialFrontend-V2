import { DashboardApiService } from './../../../../core/apis/endpoints/dashboard/dashboard.api.service';
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { take, map } from 'rxjs';

@Component({
  selector: 'app-grafico-finaceiro',
  standalone: false,

  templateUrl: './grafico-finaceiro.component.html',
  styleUrl: './grafico-finaceiro.component.scss'
})
export class GraficoFinaceiroComponent {
  data: any;
  options: any;
  platformId = inject(PLATFORM_ID);
  receita: any;
  label: any;
  aReceber: any;
  aReceberAcumulado: any;
  receitaAcumulada: any;
  constructor(private cd: ChangeDetectorRef, private dashboardApiService: DashboardApiService) { }

  ngOnInit() {
    this.getReceita()
  }
  
  getReceita() {
    this.dashboardApiService.getDados()
    .pipe(take(1))
    .subscribe((response) => {
      this.label = Object.keys(response.receitaPorMes)
      this.receita = Object.values(response.receitaPorMes).map(v => Number(v));
      this.aReceber = Object.values(response.valoresAReceberPorMes).map(v => Number(v));
      this.receitaAcumulada = Object.values(response.receitaAcumulada).map(v => Number(v));
      this.aReceberAcumulado = Object.values(response.valoresAReceberAcumulado).map(v => Number(v));
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
            type: 'bar',
            label: 'Recebido',
            backgroundColor: '#27AE60',
            data: this.receita,
            borderColor: 'white',
            borderWidth: 2
          },
          {
            type: 'bar',
            label: 'A Receber',
            backgroundColor: '#E74C3C',
            data: this.aReceber,
          },
          {
            type: 'line',
            label: 'Receita Acumulada',
            borderColor: '#27AE60',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            data: this.receitaAcumulada
          },
          {
            type: 'line',
            label: 'Divida Acumulada',
            borderColor: '#E74C3C',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            data: this.aReceberAcumulado
          },
        ]
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor
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
