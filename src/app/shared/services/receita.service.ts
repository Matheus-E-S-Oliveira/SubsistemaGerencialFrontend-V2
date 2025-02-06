import { Injectable } from "@angular/core";
import { DadosGerais } from "../../core/apis/models/dto-models/dto-models.api.service";
import { BehaviorSubject, firstValueFrom, ReplaySubject, shareReplay } from "rxjs";
import { DashboardApiService } from "../../core/apis/endpoints/dashboard/dashboard.api.service";

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  private receitaSubject = new ReplaySubject<DadosGerais>(1);
  receitaData$ = this.receitaSubject.asObservable().pipe(shareReplay(1));

  private loading = false; // Flag para controle de requisição

  constructor(private dashboardApiService: DashboardApiService) { }

  async loadLicencaData() {
    try {
      if (this.loading) {
        return;
      }

      this.loading = true; // Inicia o carregamento
      const response = await firstValueFrom(this.dashboardApiService.getDados());
      this.receitaSubject.next(response); // Armazena os dados
    } catch (error) {
      console.error('Erro ao buscar licenças:', error);
    } finally {
      this.loading = false; // Libera a flag após o carregamento
    }
  }
}
