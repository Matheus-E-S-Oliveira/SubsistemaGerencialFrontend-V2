import { DistribuicaoPlanosApiService } from './../../core/apis/endpoints/distribuicao-planos/distribuicao-planos.api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { DistrbuicaoDePlanosAnual } from '../../core/apis/models/dto-models/dto-models.api.service';

@Injectable({
  providedIn: 'root'
})
export class CompradosAnualService {
  private AnualSubject = new BehaviorSubject<DistrbuicaoDePlanosAnual | null>(null);
  AnualData$ = this.AnualSubject.asObservable();

  constructor(private distribuicaoPlanosApiService: DistribuicaoPlanosApiService) {}

  async loadLicencaData() {
    try {
      if (!this.AnualSubject.value) { // Se não houver dados, busca da API
        const response = await firstValueFrom(this.distribuicaoPlanosApiService.getDado())
        this.AnualSubject.next(response); // Armazena os dados
      }
    } catch (error) {
      console.error('Erro ao buscar licenças:', error);
    }
  }
}
