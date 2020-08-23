import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellTemplateForObservablesComponent } from './cell-template-for-observables.component';

describe('CellTemplateForObservablesComponent', () => {
  let component: CellTemplateForObservablesComponent;
  let fixture: ComponentFixture<CellTemplateForObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellTemplateForObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellTemplateForObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
