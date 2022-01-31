import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import * as indexDB from 'localforage';
declare let $;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isAuthen: boolean = false;
    displayAutnName = {
        username: null
    };

    constructor(private authServ: AuthenticationService) { }

    ngOnInit(): void {
        this.isAuthen = this.authServ.loggedIn();
        this.getAuthInfo();
    }

    async getAuthInfo() {
        this.displayAutnName = await indexDB.getItem('info');
        console.log('this.displayAutnName: ', this.displayAutnName);
    }

    toggleNav() {
        const main: any = document.querySelector('.main'),
            sidebar: any = document.querySelector('.sidebar');
        
        if (sidebar.style.width === '20px') {
            sidebar.style.width = '224px';
            main.style.marginLeft = '224px';
        } else {
            sidebar.style.width = '20px';
            main.style.marginLeft = '20px';
        }
    }
}
