import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseApiService } from "../../base.api.service";
import { BoletoDto } from "../../models/dto-models/dto-models.api.service";
import { PaginationResult } from "../../models/response-models/response-models.api.service";


@Injectable({
    providedIn: 'root'
})
export class BoletoApiService extends BaseApiService {

    private readonly endpoint = 'boleto';

    getBoleto(
        pageNumber: number = 1,
        pageSize: number = 10,
        filters?: { [key: string]: any }
    ): Observable<PaginationResult<BoletoDto>> {
        return this.getList<BoletoDto>(this.endpoint, pageNumber, pageSize, filters);
    }
}