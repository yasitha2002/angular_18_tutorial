import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Imports
import { TableModule, Table } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

interface BSPDetail {
  facilityNo: string;
  applicationNo: string;
  transactionNo: string;
  status: 'Pending' | 'Running';
  type: string;
  dueDate: string;
  dueTime: string;
  reason: string;
  allocation: string; // Percentage selection
  amountAllocation: number; // Manual amount input
  isSelected: boolean;
}

@Component({
  selector: 'app-bsp-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    CheckboxModule,
    SelectModule,
    ButtonModule,
    FloatLabel,
    InputTextModule
  ],
  templateUrl: './bsptable.component.html'
})
export class BSPTableComponent implements OnInit {
  // Reference to the PrimeNG table for pagination logic
  @ViewChild('dt') dt!: Table;

  protected readonly Math = Math;

  // Dropdown options for 'Reason' column
  reasons = [
    { label: 'Reallocation', value: 'Reallocation' },
    { label: 'Refund', value: 'Refund' },
    { label: 'OD Waiver', value: 'OD Waiver' },
    { label: 'Technical Correction', value: 'Technical Correction' }
  ];

  // Dropdown options for '%' column
  percentages = [
    { label: '0%', value: '0%' },
    { label: '5%', value: '5%' },
    { label: '20%', value: '20%' },
    { label: '75%', value: '75%' },
    { label: '100%', value: '100%' }
  ];

  details: BSPDetail[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  /**
   * Mock data to populate the table
   */
  loadData(): void {
    this.details = [
      {
        facilityNo: '031511400011',
        applicationNo: 'AP00000190',
        transactionNo: 'TC000000356',
        status: 'Pending',
        type: 'Lease',
        dueDate: '24.04.2025',
        dueTime: '11:16 AM',
        reason: 'Reallocation',
        allocation: '75%',
        amountAllocation: 8875.00,
        isSelected: true
      },
      {
        facilityNo: '031511400012',
        applicationNo: 'AP00000198',
        transactionNo: 'TC000000235',
        status: 'Running',
        type: 'Housing Loan',
        dueDate: '24.04.2025',
        dueTime: '07:16 AM',
        reason: '',
        allocation: '20%',
        amountAllocation: 20000.00,
        isSelected: false
      },
      {
        facilityNo: '031611300016',
        applicationNo: 'AP00000200',
        transactionNo: 'TC000000659',
        status: 'Pending',
        type: 'Speed Term Loan',
        dueDate: '24.04.2025',
        dueTime: '11:16 AM',
        reason: '',
        allocation: '5%',
        amountAllocation: 30000.00,
        isSelected: false
      },
      {
        facilityNo: '03161112474',
        applicationNo: 'AP00000200',
        transactionNo: 'TC000000659',
        status: 'Pending',
        type: 'Housing Loan',
        dueDate: '28.04.2025',
        dueTime: '1:36 AM',
        reason: '',
        allocation: '5%',
        amountAllocation: 90000.00,
        isSelected: false
      },
      {
        facilityNo: '09781112474',
        applicationNo: 'AP00000200',
        transactionNo: 'TC000000659',
        status: 'Pending',
        type: 'Loan',
        dueDate: '28.07.2025',
        dueTime: '5:36 AM',
        reason: '',
        allocation: '5%',
        amountAllocation: 67000.00,
        isSelected: false
      }
    ];
  }
}