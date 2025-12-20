import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgOneComponent } from './pg-one.component';

describe('PgOneComponent', () => {
  let component: PgOneComponent;
  let fixture: ComponentFixture<PgOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
