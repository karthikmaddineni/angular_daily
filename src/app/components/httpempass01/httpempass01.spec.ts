import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPEMPASS01 } from './httpempass01';

describe('HTTPEMPASS01', () => {
  let component: HTTPEMPASS01;
  let fixture: ComponentFixture<HTTPEMPASS01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HTTPEMPASS01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTTPEMPASS01);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
