import { Component } from '@angular/core';
import { ReceiptTableComponent } from '../receipt-table/receipt-table.component';

@Component({
    selector: 'app-pg-one',
    standalone: true,
    imports: [ReceiptTableComponent],
    templateUrl: './pg-one.component.html',
    styleUrl: './pg-one.component.css'
})
export class PgOneComponent {

}
