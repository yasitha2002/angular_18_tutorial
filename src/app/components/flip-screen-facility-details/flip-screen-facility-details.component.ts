import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

interface AllocationDetail {
  facilityNo: string;
  amount: number;
  bspNo: string;
  reason: string;
  allocatedAmount: number;
}

@Component({
  selector: 'app-flip-screen-facility-details',
  standalone: true,
  imports: [CommonModule, TableModule, SelectModule, ButtonModule, FormsModule],
  templateUrl: './flip-screen-facility-details.component.html',
  styleUrl: './flip-screen-facility-details.component.css'
})
export class FlipScreenFacilityDetailsComponent {
    receiptAmount = 78500.00;
  allocatedTotal = 78500.00;
  remainingBalance = 0.00;

  reasons = [
    { label: 'Reallocation', value: 'Reallocation' },
    { label: 'Refund', value: 'Refund' },
    { label: 'OD Waiver', value: 'OD Waiver' }
  ];

  details: AllocationDetail[] = [
    { facilityNo: '031511400011', amount: 8875.00, bspNo: 'IN000000365', reason: 'Reallocation', allocatedAmount: 8875.00 },
    { facilityNo: '031511400012', amount: 20000.00, bspNo: 'IN000000356', reason: 'Refund', allocatedAmount: 20000.00 },
    { facilityNo: '031611300016', amount: 30000.00, bspNo: 'IN000000164', reason: 'OD Waiver', allocatedAmount: 50000.00 }
  ];
}
