import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BSPTableComponent } from './bsptable.component';

describe('BSPTableComponent', () => {
  let component: BSPTableComponent;
  let fixture: ComponentFixture<BSPTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BSPTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BSPTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
