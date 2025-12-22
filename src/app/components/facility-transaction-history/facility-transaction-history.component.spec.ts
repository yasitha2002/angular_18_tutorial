import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityTransactionHistoryComponent } from './facility-transaction-history.component';

describe('FacilityTransactionHistoryComponent', () => {
  let component: FacilityTransactionHistoryComponent;
  let fixture: ComponentFixture<FacilityTransactionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityTransactionHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
