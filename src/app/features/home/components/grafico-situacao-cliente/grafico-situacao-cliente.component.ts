import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { LicencaApiService } from '../../../../core/apis/endpoints/liencas/licenca.api.service';
import { take } from 'rxjs';

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
  dados: any;
  label: any;
  resposta: any;


  constructor(private cd: ChangeDetectorRef, private licencaApiService: LicencaApiService) { }

  ngOnInit() {
    this.getSituacaoLicenca();
  }

  getSituacaoLicenca() {
    this.licencaApiService.getDados()
      .pipe(take(1))
      .subscribe((response) => {
        this.label = Object.keys(response);
        this.dados = Object.values(response).map(v => Number(v));
        this.initChart();
      })
  }


  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const textColor = "#424242"

      this.data = {
        labels: ["Indefinida", "Ativa", "Expirada", "Suspensa"],  // Define os rótulos com as situações das licenças
        datasets: [
          {
            data: this.dados,  // Dados de quantidade de licenças para cada situação
            backgroundColor: [
              'rgba(255, 0, 0, 1)',  // Vermelho
              'rgba(0, 0, 255, 1)',  // Azul
              'rgba(255, 255, 0, 1)',  // Amarelo
              'rgba(0, 128, 0, 1)'    // Verde
            ],
            hoverBackgroundColor: [
              'rgba(255, 0, 0, 0.8)',  // Vermelho com um pouco de transparência no hover
              'rgba(0, 0, 255, 0.8)',  // Azul com um pouco de transparência no hover
              'rgba(255, 255, 0, 0.8)',  // Amarelo com um pouco de transparência no hover
              'rgba(0, 128, 0, 0.8)'    // Verde com um pouco de transparência no hover
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
            }
          }
        }
      };
      this.cd.markForCheck()
      this.cd.detectChanges()
    }

  }
}
