import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import * as indexDB from 'localforage';

interface LoginForm {
    username: string;
    password: string;
}

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

    loginForm: LoginForm = {
        username: null,
        password: null
    };
    errorMessage: string = null;

    constructor(private loginServ: AuthenticationService, private router: Router) { }

    ngOnInit(): void {
    }

    validateLoginForm() {
        if (!this.loginForm.username) {
            throw { statusText: 'Username must be define' };
        }

        if (!this.loginForm.password) {
            throw { statusText: 'Password must be define' };
        }

        return true;
    }

    async login() {
        try {
            this.errorMessage = null;
            if (this.validateLoginForm()) {
                const result = await this.loginServ.login(this.loginForm);
                localStorage.setItem('token', result.token);
                const info = await this.loginServ.authInfo();
                await indexDB.setItem('info', info);

                this.router.navigateByUrl('/');
            }
        } catch (error) {
            this.errorMessage = error.statusText;
        }

    }

}
