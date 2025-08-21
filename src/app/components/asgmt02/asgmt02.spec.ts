import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asgmt02 } from './asgmt02';

describe('Asgmt02', () => {
  let component: Asgmt02;
  let fixture: ComponentFixture<Asgmt02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Asgmt02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asgmt02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
