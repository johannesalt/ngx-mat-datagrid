import { TestBed } from '@angular/core/testing';

import { NgxMatDatagridService } from './ngx-mat-datagrid.service';

describe('NgxMatDatagridService', () => {
  let service: NgxMatDatagridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatDatagridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
