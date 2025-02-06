import { Injectable } from "@angular/core";
import { BaseApiService } from "../../base.api.service";
import { Observable } from "rxjs";
import { DistrbuicaoDePlanosAnual, DistribuicaoPorPlanos } from "../../models/dto-models/dto-models.api.service";

@Injectable({
    providedIn: 'root'
})
export class DistribuicaoPlanosApiService extends BaseApiService {

    private readonly endpoint = 'dashboard/plano';

    getDados(): Observable<DistribuicaoPorPlanos> {
        return this.get<DistribuicaoPorPlanos>(this.endpoint);
    }

    getDado(): Observable<DistrbuicaoDePlanosAnual> {
        return this.get<DistrbuicaoDePlanosAnual>('dashboard/total');
    }
}