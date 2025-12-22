import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipScreenFacilityDetailsComponent } from './flip-screen-facility-details.component';

describe('FlipScreenFacilityDetailsComponent', () => {
  let component: FlipScreenFacilityDetailsComponent;
  let fixture: ComponentFixture<FlipScreenFacilityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipScreenFacilityDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipScreenFacilityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
