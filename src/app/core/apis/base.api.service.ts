import { HttpClient, HttpParams } from "@angular/common/http";
import { PaginationResult } from "./models/response-models/response-models.api.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BaseApiService {
    private apiUrl = 'http://localhost:5029/api/';

    constructor(private http: HttpClient) { }

    getList<T>(endpoint: string, pageNumber: number = 1, pageSize: number = 10, filters?: { [key: string]: any }
    ): Observable<PaginationResult<T>> {

        const url = `${this.apiUrl}${endpoint}`;

        let params = new HttpParams()
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString());

        if (filters) {
            Object.keys(filters).forEach(key => {
                if (filters[key] !== undefined && filters[key] !== null) {
                    params = params.set(key, filters[key]);
                }
            });
        }
        return this.http.get<PaginationResult<T>>(url, { params });
    }

    // Método para criar um registro
    post<T>(endpoint: string, body: any): Observable<T> {
        const url = `${this.apiUrl}${endpoint}`;
        return this.http.post<T>(url, body);
    }

    // Método para editar um registro
    put<T>(endpoint: string, body: any): Observable<T> {
        const url = `${this.apiUrl}${endpoint}`;
        return this.http.put<T>(url, body);
    }

    // Método para excluir um registro
    delete<T>(endpoint: string, id: number): Observable<T> {
        const url = `${this.apiUrl}${endpoint}/${id}`;
        return this.http.delete<T>(url);
    }

}