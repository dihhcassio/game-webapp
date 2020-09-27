import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGameFormComponent } from './add-game-form.component';

describe('AddGameFromComponent', () => {
  let component: AddGameFormComponent;
  let fixture: ComponentFixture<AddGameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGameFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
