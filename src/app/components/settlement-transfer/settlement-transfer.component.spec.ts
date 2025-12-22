import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementTransferComponent } from './settlement-transfer.component';

describe('SettlementTransferComponent', () => {
  let component: SettlementTransferComponent;
  let fixture: ComponentFixture<SettlementTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettlementTransferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettlementTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
