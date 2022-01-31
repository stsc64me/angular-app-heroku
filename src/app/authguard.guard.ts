import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
    constructor(private authServ: AuthenticationService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {

        if (!this.authServ.loggedIn()) {
            this.router.navigateByUrl('/');

            return false;
        }

        return true;
    }

}
