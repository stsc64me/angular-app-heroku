import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        TableModule,
        PaginatorModule,
        ButtonModule,
        InputTextModule
       
    ],
    schemas: []
})
export class SharedModule { }
