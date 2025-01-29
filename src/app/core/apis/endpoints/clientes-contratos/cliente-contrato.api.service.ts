import { Injectable } from "@angular/core";
import { BaseApiService } from "../../base.api.service";
import { ClienteContratoDto } from "../../models/dto-models/dto-models.api.service";
import { Observable } from "rxjs";
import { PaginationResult } from "../../models/response-models/response-models.api.service";

@Injectable({
    providedIn: 'root'
})
export class ClienteContratoApiService extends BaseApiService {

    private readonly endpoint = 'clienteContrato';

    getClientesContarto(
        pageNumber: number = 1,
        pageSize: number = 10,
        filters?: { [key: string]: any }
    ): Observable<PaginationResult<ClienteContratoDto>> {
        return this.getList<ClienteContratoDto>(this.endpoint, pageNumber, pageSize, filters);
    }
}