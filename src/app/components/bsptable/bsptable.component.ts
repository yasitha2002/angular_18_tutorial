import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

interface BSPDetail {
  facilityNo: string;
  applicationNo: string;
  transactionNo: string;
  status: 'Pending' | 'Running';
  type: string;
  dueDate: string;
  dueTime: string;
  reason: string;
  allocation: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-bsp-table',
  standalone: true,
  imports: [CommonModule, TableModule, CheckboxModule, SelectModule, FormsModule],
  templateUrl: './bsptable.component.html'
})
export class BSPTableComponent implements OnInit {
  reasons = [{ label: 'Select Reason', value: '' }];
  allocations = [
    { label: '75%', value: '75%' },
    { label: '20%', value: '20%' },
    { label: '5%', value: '5%' }
  ];

  details: BSPDetail[] = [
    {
      facilityNo: '031511400011',
      applicationNo: 'AP00000190',
      transactionNo: 'TC000000356',
      status: 'Pending',
      type: 'Lease',
      dueDate: '24.04.2025',
      dueTime: '11:16 AM',
      reason: '',
      allocation: '75%',
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
      isSelected: false
    }
  ];

  ngOnInit(): void {}
}