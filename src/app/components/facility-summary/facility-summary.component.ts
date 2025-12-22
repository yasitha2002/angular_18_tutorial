import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facility-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facility-summary.component.html'
})
export class FacilitySummaryComponent {
  summary = [
    { label: 'Facility Amount', value: 2000000.00 },
    { label: 'Total Arrears', value: 254000.00 },
    { label: 'OD', value: 26000.00 }
  ];
}