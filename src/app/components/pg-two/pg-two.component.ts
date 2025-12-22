import { Component } from '@angular/core';
import { BSPTableComponent } from '../bsptable/bsptable.component';
import { AllocationSummaryComponent } from '../app-allocation/app-allocation.component';
import { FacilityTransactionHistoryComponent } from '../facility-transaction-history/facility-transaction-history.component';
import { FacilitySummaryComponent } from '../facility-summary/facility-summary.component';

@Component({
  selector: 'app-pg-two',
  
  imports: [BSPTableComponent,AllocationSummaryComponent,FacilityTransactionHistoryComponent,FacilitySummaryComponent],
  templateUrl: './pg-two.component.html',
  styleUrl: './pg-two.component.css'
})
export class PgTwoComponent {

}
