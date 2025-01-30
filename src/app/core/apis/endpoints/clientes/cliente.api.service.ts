import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseApiService } from "../../base.api.service";
import { ClienteComEnderecoDto, ClienteDto } from "../../models/dto-models/dto-models.api.service";
import { PaginationResult } from "../../models/response-models/response-models.api.service";


@Injectable({
    providedIn: 'root'
})
export class ClienteApiService extends BaseApiService {

    private readonly endpoint = 'cliente';

    getClientes(
        pageNumber: number = 1,
        pageSize: number = 10,
        filters?: { [key: string]: any }
    ): Observable<PaginationResult<ClienteDto>> {
        return this.getList<ClienteDto>(this.endpoint, pageNumber, pageSize, filters);
    }

    getClienteById(
        id: string,
        pageNumber: number = 1,
        pageSize: number = 10,
        filters?: { [key: string]: any }
    ): Observable<PaginationResult<ClienteComEnderecoDto>> {
        return this.getById<ClienteComEnderecoDto>(id, this.endpoint, pageNumber, pageSize, filters);
    }
}