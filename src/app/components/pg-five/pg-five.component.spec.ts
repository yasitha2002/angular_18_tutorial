import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgFiveComponent } from './pg-five.component';

describe('PgFiveComponent', () => {
  let component: PgFiveComponent;
  let fixture: ComponentFixture<PgFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
