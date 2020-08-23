import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatDatagridComponent } from './ngx-mat-datagrid.component';

describe('NgxMatDatagridComponent', () => {
  let component: NgxMatDatagridComponent<any>;
  let fixture: ComponentFixture<NgxMatDatagridComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatDatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
