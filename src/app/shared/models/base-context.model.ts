import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root',
})

export class BaseContext{
    constructor(private router: Router) {}

    public GetRouteId(): string {
        return this.router.url.split('/')[this.router.url.split('/').length - 1];
    }
}