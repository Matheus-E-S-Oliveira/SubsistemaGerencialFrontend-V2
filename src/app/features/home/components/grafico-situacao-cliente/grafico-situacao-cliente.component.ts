import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-grafico-situacao-cliente',
  standalone: false,
  
  templateUrl: './grafico-situacao-cliente.component.html',
  styleUrl: './grafico-situacao-cliente.component.scss'
})
export class GraficoSituacaoClienteComponent {
  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
      this.initChart();
  }

  initChart() {
      if (isPlatformBrowser(this.platformId)) {

          const textColor = "#424242"

          this.data = {
              labels: ['A', 'B', 'C'],
              datasets: [
                  {
                      data: [540, 325, 702],
                      backgroundColor: ['red', 'blue', 'yellow'],
                    //   hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
                  }
              ]
          };

          this.options = {
              plugins: {
                  legend: {
                      labels: {
                          usePointStyle: true,
                          color: textColor
                      }
                  }
              }
          };
          this.cd.markForCheck()
      }

  }
}
