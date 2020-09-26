import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private auth: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.headersAppends(request, next));
    }

    private async headersAppends(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
        if (this.auth.existsToken){
            request = request.clone({ setHeaders: { Authorization: `Bearer ${this.auth.token}` } })
        }
        return next.handle(request).toPromise();
    }

}