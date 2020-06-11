import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireRenduComponent } from './formulaire-rendu.component';

describe('FormulaireRenduComponent', () => {
  let component: FormulaireRenduComponent;
  let fixture: ComponentFixture<FormulaireRenduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireRenduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireRenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
