import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Httpdemooooo } from './httpdemooooo';

describe('Httpdemooooo', () => {
  let component: Httpdemooooo;
  let fixture: ComponentFixture<Httpdemooooo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Httpdemooooo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Httpdemooooo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
