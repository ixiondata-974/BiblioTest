import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlivreComponent } from './llivre.component';

describe('LlivreComponent', () => {
  let component: LlivreComponent;
  let fixture: ComponentFixture<LlivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
