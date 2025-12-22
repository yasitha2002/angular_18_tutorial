import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgThreeComponent } from './pg-three.component';

describe('PgThreeComponent', () => {
  let component: PgThreeComponent;
  let fixture: ComponentFixture<PgThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
