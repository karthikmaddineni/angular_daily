import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentRegistrationForm } from './assignment-registration-form';

describe('AssignmentRegistrationForm', () => {
  let component: AssignmentRegistrationForm;
  let fixture: ComponentFixture<AssignmentRegistrationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentRegistrationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentRegistrationForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
