import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { DadosDiversos, DistribuicaoClinetesPorFormaPagamento } from '../../core/apis/models/dto-models/dto-models.api.service';
import { DashboardApiService } from '../../core/apis/endpoints/dashboard/dashboard.api.service';

@Injectable({
  providedIn: 'root'
})
export class DadosGeraisService {
  private DadosGerais = new BehaviorSubject<DadosDiversos | null>(null);
  DadosGeraisData$ = this.DadosGerais.asObservable();

  constructor(private dashboardApiService: DashboardApiService) {}

  async loadLicencaData() {
    try {
      if (!this.DadosGerais.value) { // Se não houver dados, busca da API
        const response = await firstValueFrom(this.dashboardApiService.getDadosDiversos())
        this.DadosGerais.next(response); // Armazena os dados
      }
    } catch (error) {
      console.error('Erro ao buscar licenças:', error);
    }
  }
}
