import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servdemo } from './servdemo';

describe('Servdemo', () => {
  let component: Servdemo;
  let fixture: ComponentFixture<Servdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servdemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servdemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
