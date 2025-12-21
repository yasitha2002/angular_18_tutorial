import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

interface Receipt {
  receiptNo: string;
  amount: number;
  date: string;
  time: string;
  isSelected?: boolean;
}

@Component({
  selector: 'app-receipt-table',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './receipt-table.component.html',
  styleUrl: './receipt-table.component.css'
})

export class ReceiptTableComponent implements OnInit {

  receipts: Receipt[] = [
    { receiptNo: 'RXXXXXXXXX', amount: 100000.00, date: '24.04.2025', time: '11:16 AM', isSelected: true },
    { receiptNo: 'RXXXXXXXXX', amount: 78500.00, date: '24.04.2025', time: '07:16 AM' },
    { receiptNo: 'RXXXXXXXXX', amount: 982000.00, date: '24.04.2025', time: '11:16 AM' },
    { receiptNo: 'RXXXXXXXXX', amount: 582000.00, date: '24.04.2025', time: '7:19 AM' },
    { receiptNo: 'RXXXXXXXXX', amount: 82000.00, date: '24.04.2025', time: '5:36 AM' },
    { receiptNo: 'RXXXXXXXXX', amount: 965000.00, date: '9.09.2025', time: '2:16 AM' },
    { receiptNo: 'RXXXXXXXXX', amount: 454000.00, date: '29.04.2025', time: '6:16 AM' },
    { receiptNo: 'RXXXXXXXXX', amount: 443000.00, date: '24.04.2025', time: '1:08 AM' },
    { receiptNo: 'RXXXXXXXXX', amount: 125000.00, date: '24.04.2025', time: '3:06 AM' },
    { receiptNo: 'RXXXXXXXXX', amount: 951000.00, date: '24.04.2025', time: '1:16 AM' }
  ];

  selectedAmount: number = 78500.00;

  selectReceipt(item: Receipt) {
    // Deselect all
    this.receipts.forEach(r => r.isSelected = false);
    // Select the clicked one
    item.isSelected = true;
    // Update the total amount display
    this.selectedAmount = item.amount;
  }

  ngOnInit(): void {}
}
