import { Component, OnInit } from '@angular/core';
import { DataTableService } from './data-table.service';
import { SortEvent } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { LazyLoadEvent } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    providers: [MessageService],
    styleUrls: ['./data-table.component.scss'],
    styles: [`
      :host ::ng-deep .p-cell-editing {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
      }
  `]
})
export class DataTableComponent implements OnInit {
    comments: Comment[] = [];
    datasource: Comment[] = [];
    clonedComments: { [s: string]: Comment; } = {};
    loading: boolean;
    totalRecords: number;
    first = 0;
    rows = 10;

    constructor(private dtServ: DataTableService, private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

    ngOnInit(): void {
        this.getUsers();
        this.loading = true;
        this.primengConfig.ripple = true;
    }

    getUsers() {
        try {
            this.dtServ.getUsers().subscribe((comments: any[]) => {
                console.log(comments);
                this.comments = comments;
                this.datasource = comments;
                this.totalRecords = comments.length;
            }, (error) => {
                throw new Error(error);
            });
        } catch (error) {
            console.log(error);
        }
    }

    onRowEditInit(comment: Comment) {
        this.clonedComments[comment.id] = { ...comment };
        console.log("onRowEditInit", comment.id);
    }

    onRowEditSave(comment: Comment) {
        console.log(comment);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
    }

    onRowEditCancel(comment: Comment, index: number) {
        // this.products2[index] = this.clonedProducts[product.id];
        // delete this.products2[product.id];
    }

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    isLastPage(): boolean {
        return this.comments ? this.first === (this.comments.length - this.rows) : true;
    }

    isFirstPage(): boolean {
        return this.comments ? this.first === 0 : true;
    }

    customSort(event: SortEvent) {
        event.data.sort((data1, data2) => {
            let value1 = data1[event.field];
            let value2 = data2[event.field];
            let result = null;

            if (value1 == null && value2 != null)
                result = -1;
            else if (value1 != null && value2 == null)
                result = 1;
            else if (value1 == null && value2 == null)
                result = 0;
            else if (typeof value1 === 'string' && typeof value2 === 'string')
                result = value1.localeCompare(value2);
            else
                result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

            return (event.order * result);
        });
    }

    loadCustomers(event: LazyLoadEvent) {
        this.loading = true;

        //imitate db connection over a network
        setTimeout(() => {
            if (this.datasource) {
                this.comments = this.datasource.slice(event.first, (event.first + event.rows));
                this.loading = false;
            }
        }, 1000);
    }

}
