import { Contrato } from './../../core/apis/models/dto-models/dto-models.api.service';
import { DashboardApiService } from './../../core/apis/endpoints/dashboard/dashboard.api.service';
import { Injectable } from '@angular/core';
import { firstValueFrom, ReplaySubject, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  private contratoSubject = new ReplaySubject<Contrato>(1);
  contratoData$ = this.contratoSubject.asObservable().pipe(shareReplay(1));
  private loading = false; 
  constructor(private dashboardApiService: DashboardApiService) {}

  async loadLicencaData() {
    try {
        if (this.loading) {
          return;
        }
  
        this.loading = true; // Inicia o carregamento
        const response = await firstValueFrom(this.dashboardApiService.getContrato());
        this.contratoSubject.next(response); // Armazena os dados
      } catch (error) {
        console.error('Erro ao buscar licenças:', error);
      } finally {
        this.loading = false; // Libera a flag após o carregamento
      }
  }
}
