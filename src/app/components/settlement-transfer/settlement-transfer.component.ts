import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-settlement-transfer',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    TableModule, 
    SelectModule, 
    ButtonModule, 
    InputTextModule
  ],
  templateUrl: './settlement-transfer.component.html',
  styleUrl: './settlement-transfer.component.css'
})
export class SettlementTransferComponent implements OnInit {
  
  receiptNo: string = 'R3000025643';
  requestAmount: number = 58875.00;

  // New properties for input bindings
  requestReasonText: string = '';
  remarksText: string = '';
  approvalReason: string = '';
  rejectionReason: string = '';

  reasons: any[] = [
    { label: 'Reallocation', value: 'Reallocation' },
    { label: 'Refund', value: 'Refund' },
    { label: 'OD Waiver', value: 'OD Waiver' }
  ];

  details: any[] = [
    { facilityNo: '031511400011', amount: 8875.00, bspNo: 'IN000000365', reason: null, allocation: '8,875.00' },
    { facilityNo: '031511400012', amount: 20000.00, bspNo: 'IN000000356', reason: null, allocation: '20,000.00' },
    { facilityNo: '031611300016', amount: 30000.00, bspNo: 'IN000000164', reason: null, allocation: '30,000.00' }
  ];

  ngOnInit(): void {}

  // Example Action Methods
  onApprove() {
    console.log('Approved with reason:', this.approvalReason);
  }

  onReject() {
    console.log('Rejected with reason:', this.rejectionReason);
  }
}