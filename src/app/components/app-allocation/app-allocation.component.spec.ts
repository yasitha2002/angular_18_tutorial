import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAllocationComponent } from './app-allocation.component';

describe('AppAllocationComponent', () => {
  let component: AppAllocationComponent;
  let fixture: ComponentFixture<AppAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAllocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
