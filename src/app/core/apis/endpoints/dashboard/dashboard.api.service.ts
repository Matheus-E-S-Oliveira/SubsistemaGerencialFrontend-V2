import { Injectable } from "@angular/core";
import { BaseApiService } from "../../base.api.service";
import { ClienteContratoDto, DadosGerais, DistribuicaoClinetesPorFormaPagamento } from "../../models/dto-models/dto-models.api.service";
import { Observable } from "rxjs";
import { PaginationResult } from "../../models/response-models/response-models.api.service";

@Injectable({
    providedIn: 'root'
})
export class DashboardApiService extends BaseApiService {

    private readonly endpoint = 'dashboard/mensais';

    getDados(): Observable<DadosGerais> {
        return this.get<DadosGerais>(this.endpoint);
    }

    getDistribuicaoFP(): Observable<DistribuicaoClinetesPorFormaPagamento> {
        return this.get<DistribuicaoClinetesPorFormaPagamento>('dashboard/pagamentos');
    }
}