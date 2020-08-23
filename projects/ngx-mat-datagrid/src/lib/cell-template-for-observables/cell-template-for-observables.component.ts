import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {CellTemplateDirective} from '../cell-template/cell-template.directive';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {Observable, ReplaySubject, Subject} from 'rxjs';

@Component({
  selector: 'ngx-mat-datagrid-cell-template-for-observables',
  templateUrl: './cell-template-for-observables.component.html',
  styleUrls: ['./cell-template-for-observables.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CellTemplateForObservablesComponent<TValue, T> implements OnInit, OnDestroy {

  /**
   * The template used to render the cell.
   */
  @Input() cellTemplate: CellTemplateDirective;

  /**
   * The object corresponding to this row.
   */
  @Input() element: T;

  /**
   * Value indicating whether the system is waiting for the value.
   */
  public loading = false;

  /**
   * Current cell value.
   */
  public value: TValue;

  /**
   * An observable for an observable. Looks ugly? By this we can simply replace the observable with a new value, without
   * make sure that the we unsubscribe from previous value.
   */
  private observable$: ReplaySubject<Observable<TValue>> = new ReplaySubject<Observable<TValue>>();

  /**
   * Used to unsubscribe from all subscriptions if component get destroyed.
   */
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  /**
   * Sets the value.
   * @param obs the value.
   */
  @Input()
  set observable(obs: Observable<TValue>) {
    this.observable$.next(obs);
  }

  /**
   * Initialize the directive or component after Angular first displays the data-bound
   * properties and sets the directive or component's input properties.
   * See details in Initializing a component or directive in this document.
   */
  ngOnInit(): void {
    this.observable$
      .pipe(
        tap(() => {
          this.loading = true;
          this.changeDetectorRef.detectChanges();
        }),
        switchMap(innerObservable => innerObservable),
        tap(() => {
          this.loading = false;
          this.changeDetectorRef.detectChanges();
        }),
        takeUntil(this.destroy$))
      .subscribe(value => {
        this.value = value;
        this.changeDetectorRef.detectChanges();
      });
  }

  /**
   * Cleanup just before Angular destroys the directive or component. Unsubscribe
   * Observables and detach event handlers to avoid memory leaks.
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
