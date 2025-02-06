import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { LicencaApiService } from '../../core/apis/endpoints/liencas/licenca.api.service';

@Injectable({
  providedIn: 'root'
})
export class LicencaService {
  private licencaSubject = new BehaviorSubject<any | null>(null);
  licencaData$ = this.licencaSubject.asObservable();

  constructor(private licencaApiService: LicencaApiService) {}

  async loadLicencaData() {
    try {
      if (!this.licencaSubject.value) { // Se não houver dados, busca da API
        const response = await firstValueFrom(this.licencaApiService.getDados());
        this.licencaSubject.next(response); // Armazena os dados
      }
    } catch (error) {
      console.error('Erro ao buscar licenças:', error);
    }
  }
}
