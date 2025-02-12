import { Injectable } from "@angular/core";
import { BaseApiService } from "../../base.api.service";
import { Observable } from "rxjs";
import { LicencaDto, LicencasStatus } from "../../models/dto-models/dto-models.api.service";
import { PaginationResult } from "../../models/response-models/response-models.api.service";



@Injectable({
    providedIn: 'root'
})
export class LicencaApiService extends BaseApiService {

    private readonly endpoint = 'dashboard/licenca';

    getDados(): Observable<LicencasStatus> {
        return this.get<LicencasStatus>(this.endpoint);
    }

    getLicencaVencidas(
        pageNumber: number = 1,
        pageSize: number = 10,
        filters?: { [key: string]: any }
    ): Observable<PaginationResult<LicencaDto>> {
        return this.getList<LicencaDto>('licenca/vencidos', pageNumber, pageSize, filters);
    }

    getLicencaVencendo(
        pageNumber: number = 1,
        pageSize: number = 10,
        filters?: { [key: string]: any }
    ): Observable<PaginationResult<LicencaDto>> {
        return this.getList<LicencaDto>('licenca/vencendo', pageNumber, pageSize, filters);
    }
}