import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../authentication.service';
import * as indexDB from 'localforage';

@Component({
    selector: 'app-unathentication',
    templateUrl: './unathentication.component.html',
    styleUrls: ['./unathentication.component.scss']
})
export class UnathenticationComponent implements OnInit {

    constructor(private router: Router) { }

    async ngOnInit() {
        localStorage.removeItem('token');
        await indexDB.removeItem('info');

        this.router.navigate(['/']);
    }

}
