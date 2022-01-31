import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler) {
        const token = localStorage.getItem('token');

        if (token && typeof request.headers !== 'undefined') {
            return next.handle(request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            })).pipe(tap(() => {}, (error) => {
                if (error instanceof HttpErrorResponse && error.statusText === 'Unauthorized') {
                    return this.router.navigate(['/login']);
                }
            }));
        }

        return next.handle(request);
    }
}
