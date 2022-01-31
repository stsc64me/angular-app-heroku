import {  CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentMRoutingModule } from './component-m-routing.module';
import { ComponentMComponent } from './component-m.component';
import { SharedModule } from '../shared.module';
import { DataTableComponent } from './data-table/data-table.component';


@NgModule({
    declarations: [
        ComponentMComponent,
        DataTableComponent
    ],
    imports: [
        CommonModule,
        ComponentMRoutingModule,
        SharedModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ComponentMModule { }
