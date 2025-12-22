import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-facility-transaction-history',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './facility-transaction-history.component.html'
})
export class FacilityTransactionHistoryComponent {
  history = [
    { amount: 36000.00, date: '24.04.2025' },
    { amount: 36000.00, date: '01.03.2025' }
  ];
}