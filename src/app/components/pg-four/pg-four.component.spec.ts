import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgFourComponent } from './pg-four.component';

describe('PgFourComponent', () => {
  let component: PgFourComponent;
  let fixture: ComponentFixture<PgFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
