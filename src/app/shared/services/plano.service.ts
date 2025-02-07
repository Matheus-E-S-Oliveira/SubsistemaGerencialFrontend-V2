import { DistribuicaoPlanosApiService } from './../../core/apis/endpoints/distribuicao-planos/distribuicao-planos.api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { DistribuicaoPorPlanos } from '../../core/apis/models/dto-models/dto-models.api.service';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {
  private PlanoSubject = new BehaviorSubject<DistribuicaoPorPlanos | null>(null);
  PlanoData$ = this.PlanoSubject.asObservable();

  constructor(private distribuicaoPlanosApiService: DistribuicaoPlanosApiService) {}

  async loadLicencaData() {
    try {
      if (!this.PlanoSubject.value) { // Se não houver dados, busca da API
        const response = await firstValueFrom(this.distribuicaoPlanosApiService.getDados())
        this.PlanoSubject.next(response); // Armazena os dados
      }
    } catch (error) {
      console.error('Erro ao buscar licenças:', error);
    }
  }
}
