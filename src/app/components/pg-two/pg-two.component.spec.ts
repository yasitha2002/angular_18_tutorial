import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgTwoComponent } from './pg-two.component';

describe('PgTwoComponent', () => {
  let component: PgTwoComponent;
  let fixture: ComponentFixture<PgTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
