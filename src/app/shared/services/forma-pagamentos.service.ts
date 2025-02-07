import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { DistribuicaoClinetesPorFormaPagamento } from '../../core/apis/models/dto-models/dto-models.api.service';
import { DashboardApiService } from '../../core/apis/endpoints/dashboard/dashboard.api.service';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {
  private FpSubject = new BehaviorSubject<DistribuicaoClinetesPorFormaPagamento | null>(null);
  FpData$ = this.FpSubject.asObservable();

  constructor(private dashboardApiService: DashboardApiService) {}

  async loadLicencaData() {
    try {
      if (!this.FpSubject.value) { // Se não houver dados, busca da API
        const response = await firstValueFrom(this.dashboardApiService.getDistribuicaoFP())
        this.FpSubject.next(response); // Armazena os dados
      }
    } catch (error) {
      console.error('Erro ao buscar licenças:', error);
    }
  }
}
