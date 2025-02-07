import { Injectable } from "@angular/core";
import { BaseApiService } from "../../base.api.service";
import { Clientes, Contrato, DadosDiversos, DadosGerais, DistribuicaoClinetesPorFormaPagamento } from "../../models/dto-models/dto-models.api.service";
import { Observable } from "rxjs";

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

    getDadosDiversos(): Observable<DadosDiversos> {
        return this.get<DadosDiversos>('dashboard/gerais');
    }

    getClientes(): Observable<Clientes> {
        return this.get<Clientes>('dashboard/clientes');
    }

    getContrato(): Observable<Contrato> {
        return this.get<Contrato>('dashboard/contrato')
    }
}