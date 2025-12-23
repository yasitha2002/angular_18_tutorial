import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule, Table } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-bsp-table',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, CheckboxModule, SelectModule, ButtonModule, InputTextModule],
  templateUrl: './bsptable.component.html'
})
export class BSPTableComponent implements OnInit {
  @ViewChild('dt') dt!: Table;

  
  // Form Fields
  requestReasonText: string = 'Customer Refund request for receipt Number R3000056789.';
  remarksText: string = 'Example Remark';
  approvalReason: string = '';
  rejectionReason: string = '';

  get currentPage(): number {
    // If dt or dt.rows is undefined, default to page 1
    if (!this.dt || !this.dt.rows) {
      return 1;
    }
    return Math.floor((this.dt.first ?? 0) / (this.dt.rows ?? 1)) + 1;
  }

  get totalPages(): number {
    // If table isn't initialized or has no records, default to 0
    if (!this.dt || !this.dt.rows || !this.dt.totalRecords) {
      return 0;
    }
    return Math.ceil((this.dt.totalRecords ?? 0) / (this.dt.rows ?? 1));
  }
  
  // You can also simplify the button clicks by adding these methods:
 prevPage() {
  // Check if dt and rows exist before performing arithmetic
  if (this.dt && this.dt.rows && (this.dt.first ?? 0) > 0) {
    this.dt.first = (this.dt.first ?? 0) - this.dt.rows;
  }
}

nextPage() {
  // Check if dt, rows, and totalRecords exist
  if (this.dt && this.dt.rows && this.dt.totalRecords !== undefined) {
    const currentFirst = this.dt.first ?? 0;
    if ((currentFirst + this.dt.rows) < this.dt.totalRecords) {
      this.dt.first = currentFirst + this.dt.rows;
    }
  }
}
  reasons = [
    { label: 'Reallocation', value: 'Reallocation' },
    { label: 'Refund', value: 'Refund' },
    { label: 'OD Waiver', value: 'OD Waiver' }
  ];

  percentages = [
    { label: '75%', value: '75%' },
    { label: '20%', value: '20%' },
    { label: '5%', value: '5%' }
  ];

  details = [
    { facilityNo: '031511400011', applicationNo: 'AP00000190', transactionNo: 'TC000000356', status: 'Pending', type: 'Lease', dueDate: '24.04.2025', dueTime: '11:16 AM', reason: 'Reallocation', allocation: '75%', amountAllocation: 8875.00, isSelected: true },
    { facilityNo: '031511400012', applicationNo: 'AP00000198', transactionNo: 'TC000000235', status: 'Running', type: 'Housing Loan', dueDate: '24.04.2025', dueTime: '07:16 AM', reason: 'Refund', allocation: '20%', amountAllocation: 20000.00, isSelected: false },
    { facilityNo: '031611300016', applicationNo: 'AP00000200', transactionNo: 'TC000000659', status: 'Pending', type: 'Speed Term Loan', dueDate: '24.04.2025', dueTime: '11:16 AM', reason: 'OD Waiver', allocation: '5%', amountAllocation: 30000.00, isSelected: false },
    { facilityNo: '031611300016', applicationNo: 'AP00000200', transactionNo: 'TC000000659', status: 'Pending', type: 'Speed Term Loan', dueDate: '24.04.2025', dueTime: '11:16 AM', reason: 'OD Waiver', allocation: '5%', amountAllocation: 30000.00, isSelected: false },
    { facilityNo: '031611300016', applicationNo: 'AP00000200', transactionNo: 'TC000000659', status: 'Pending', type: 'Speed Term Loan', dueDate: '24.04.2025', dueTime: '11:16 AM', reason: 'OD Waiver', allocation: '5%', amountAllocation: 30000.00, isSelected: false }
  ];

  ngOnInit(): void {}
}