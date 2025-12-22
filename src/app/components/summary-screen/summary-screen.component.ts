import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';

interface SettlementDetail {
  facilityNo: string;
  amount: number;
  bspNo: string;
  date: string;
}

@Component({
  selector: 'app-summary-screen',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, SelectModule, FormsModule,FloatLabel],
  templateUrl: './summary-screen.component.html',
  styleUrl: './summary-screen.component.css'
})
export class SummaryScreenComponent {
   receiptNo: string = 'R3000025643';
  requestAmount: number = 78500.00;

  // Table Data
  details: SettlementDetail[] = [
    { facilityNo: '031511400011', amount: 8875.00, bspNo: 'IN000000365', date: '24.05.2025' },
    { facilityNo: '031511400012', amount: 20000.00, bspNo: 'IN000000356', date: '24.05.2025' },
    { facilityNo: '031611300016', amount: 30000.00, bspNo: 'IN000000164', date: '24.05.2025' }
  ];

  // Form Fields
  selectedReason: string = '';
  remarks: string = '';

  reasons = [
    { label: 'Correction', value: 'Correction' },
    { label: 'Customer Request', value: 'Customer Request' },
    { label: 'Technical Error', value: 'Technical Error' }
  ];
}
