import { DashboardApiService } from './../../core/apis/endpoints/dashboard/dashboard.api.service';
import { Injectable } from '@angular/core';
import { firstValueFrom, ReplaySubject, shareReplay } from 'rxjs';
import { Clientes } from '../../core/apis/models/dto-models/dto-models.api.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private ClienteSubject = new ReplaySubject<Clientes>(1);
  ClienteData$ = this.ClienteSubject.asObservable().pipe(shareReplay(1));
  private loading = false; 
  constructor(private dashboardApiService: DashboardApiService) {}

  async loadLicencaData() {
    try {
        if (this.loading) {
          return;
        }
  
        this.loading = true; // Inicia o carregamento
        const response = await firstValueFrom(this.dashboardApiService.getClientes());
        this.ClienteSubject.next(response); // Armazena os dados
      } catch (error) {
        console.error('Erro ao buscar licenças:', error);
      } finally {
        this.loading = false; // Libera a flag após o carregamento
      }
  }
}
