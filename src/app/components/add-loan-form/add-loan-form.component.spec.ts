import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoanFormComponent } from './add-loan-form.component';

describe('AddLoanFromComponent', () => {
  let component: AddLoanFormComponent;
  let fixture: ComponentFixture<AddLoanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLoanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
