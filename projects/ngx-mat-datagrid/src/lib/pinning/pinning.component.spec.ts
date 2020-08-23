import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PinningComponent} from './pinning.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {from} from 'rxjs';

describe('PinningComponent', () => {
  let component: PinningComponent;
  let fixture: ComponentFixture<PinningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PinningComponent],
      imports: [NoopAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be pinned', () => {
    component.pinned = false;
    component.pinOrUnpinRowOrColumn();
    expect(component.pinned).toBeTrue();
  });

  it('should emit the pin event', (done) => {
    component.pinned = false;
    from(component.pin).subscribe(() => done());
    component.pinOrUnpinRowOrColumn();
  });

  it('should be unpinned', () => {
    component.pinned = true;
    component.pinOrUnpinRowOrColumn();
    expect(component.pinned).toBeFalse();
  });

  it('should emit the unpin event', (done) => {
    component.pinned = true;
    from(component.unpin).subscribe(() => done());
    component.pinOrUnpinRowOrColumn();
  });
});
