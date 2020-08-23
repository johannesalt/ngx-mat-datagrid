import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {ColumnComponent} from './column/column.component';
import {Sort, SortDirection} from '@angular/material/sort';
import {from, Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'ngx-mat-datagrid',
  templateUrl: './ngx-mat-datagrid.component.html',
  styleUrls: ['./ngx-mat-datagrid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NgxMatDatagridComponent<T> implements AfterViewInit, AfterContentInit {

  /**
   * Column definitions for the table. Defines a set of cells available for a table visibleColumnsWhichWereNotPinned.
   */
  @ContentChildren(ColumnComponent)
  public columnDefs!: QueryList<ColumnComponent>;

  /**
   * The table's source of data, which can be provided in three ways (in order of complexity):
   *
   * Simple data array (each object represents one table row)
   * Stream that emits a data array each time the array changes
   * DataSource object that implements the connect/disconnect interface.
   */
  @Input()
  public dataSource: T[] | Observable<T[]> | DataSource<T> = [];

  /**
   * The sort direction of the currently active MatSortable.
   */
  @Input()
  public sortDirection: SortDirection;

  /**
   * The Id of the most recently sorted MatSortable.
   */
  @Input()
  public idOfMostRecentlySortedSortable: string;

  /**
   * Event emitted when the user changes either the active sort or sort sortDirection.
   */
  @Output()
  public sortChange: EventEmitter<Sort> = new EventEmitter<Sort>();

  /**
   * Columns rendered in the grid.
   */
  public visibleColumns: ColumnComponent[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  /**
   * Respond after Angular initializes the component's views and child views,
   * or the view that contains the directive.
   */
  ngAfterViewInit(): void {
    this.columnDefs.forEach(c => {
      // Update the sort state of the columns.
      from(c.sortChange)
        .subscribe((sort: Sort) => {
          this.idOfMostRecentlySortedSortable = sort.active;
          this.sortDirection = sort.direction;
          this.changeDetectorRef.detectChanges();

          this.updateSortStateOfAllColumns(sort);
        });

      // Update the list of visible columns if the hidden flag of any column has been updated.
      from(c.hiddenChange).subscribe(() => this.updateVisibleColumns());
    });

    this.updateVisibleColumns();
  }

  /**
   * After sorting changed outside of this component - e.g. sorting was set by any other component.
   * @param e Event arguments.
   */
  public sortChanged(e: Sort) {
    this.updateSortStateOfAllColumns(e);
    this.sortChange.emit(e);
  }

  /**
   * Update the sort state of all columns.
   * @param sort The new state.
   */
  private updateSortStateOfAllColumns(sort: Sort): void {
    this.columnDefs.forEach(columnDef => {
      columnDef.sortDirection = sort.direction;
      columnDef.idOfMostRecentlySortedSortable = sort.active;
    });
  }

  /**
   * Update the list of visible columns. Only visible columns were rendered.
   */
  private updateVisibleColumns(): void {
    this.visibleColumns = this.columnDefs
      .filter(item => item.hidden !== true)
      .sort((a, b) => a.position - b.position);

    // Render control
    this.changeDetectorRef.detectChanges();
  }
}
