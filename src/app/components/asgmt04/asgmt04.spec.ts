import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asgmt04 } from './asgmt04';

describe('Asgmt04', () => {
  let component: Asgmt04;
  let fixture: ComponentFixture<Asgmt04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Asgmt04]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asgmt04);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
