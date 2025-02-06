import { Injectable } from "@angular/core";
import { BaseApiService } from "../../base.api.service";
import { Observable } from "rxjs";
import { LicencasStatus } from "../../models/dto-models/dto-models.api.service";



@Injectable({
    providedIn: 'root'
})
export class LicencaApiService extends BaseApiService {

    private readonly endpoint = 'dashboard/licenca';

    getDados(): Observable<LicencasStatus> {
        return this.get<LicencasStatus>(this.endpoint);
    }
}