import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asgmt03 } from './asgmt03';

describe('Asgmt03', () => {
  let component: Asgmt03;
  let fixture: ComponentFixture<Asgmt03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Asgmt03]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asgmt03);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
