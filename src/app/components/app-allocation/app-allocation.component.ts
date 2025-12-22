import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-allocation-summary',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './app-allocation.component.html',
  styleUrl: './app-allocation.component.css'
})
export class AllocationSummaryComponent {
         allocations = [
    { facilityNo: 'RXXXXXXXXX', amount: 100000.00, bspNo: 'INXXXXXXXX' },
    { facilityNo: 'RXXXXXXXXX', amount: 78500.00, bspNo: 'INXXXXXXXX' }
  ];
}
