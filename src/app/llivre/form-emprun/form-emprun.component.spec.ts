import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmprunComponent } from './form-emprun.component';

describe('FormEmprunComponent', () => {
  let component: FormEmprunComponent;
  let fixture: ComponentFixture<FormEmprunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEmprunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmprunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
