import { Injectable } from "@angular/core";
import { BaseApiService } from "../../base.api.service";
import { FazendaDto } from "../../models/dto-models/dto-models.api.service";
import { PaginationResult } from "../../models/response-models/response-models.api.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FazendaApiService extends BaseApiService{

    private readonly endpoint = 'fazenda';

    getFazendas(
        pageNumber: number = 1,
        pageSize: number = 10,
        filters?: { [key: string]: any }
    ): Observable<PaginationResult<FazendaDto>> {
        return this.getList<FazendaDto>(this.endpoint, pageNumber, pageSize, filters);
    }
}
