import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

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

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const textColor = '#424242';
      const textColorSecondary = '#424242';
      const surfaceBorder = '#606060';

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            type: 'line',
            label: 'Dataset 1',
            borderColor: '#27AE60',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            data: [50, 25, 12, 48, 56, 76, 42]
          },
          {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: '#27AE60',
            data: [21, 84, 24, 75, 37, 65, 34],
            borderColor: 'white',
            borderWidth: 2
          },
          {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: '#E74C3C',
            data: [41, 52, 24, 74, 23, 21, 32]
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
      this.cd.markForCheck();
    }
  }
}  
