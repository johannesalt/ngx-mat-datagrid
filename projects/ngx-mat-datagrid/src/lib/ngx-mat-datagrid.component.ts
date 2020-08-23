import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren, Input,
  QueryList, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ColumnComponent} from './column/column.component';
import {MatSort, Sort} from '@angular/material/sort';
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

  public visibleColumns: ColumnComponent[] = [];

  @ViewChild(MatSort) sort: MatSort;

  /**
   * The table's source of data, which can be provided in three ways (in order of complexity):
   *
   * Simple data array (each object represents one table row)
   * Stream that emits a data array each time the array changes
   * DataSource object that implements the connect/disconnect interface.
   */
  @Input() public dataSource: T[] | Observable<T[]> | DataSource<T> = [];


  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {

    this.columnDefs.forEach(c => {

      from(c.sortChange)
        .subscribe((sort: Sort) => {
          this.sort.active = sort.active;
          this.sort.direction = sort.direction;
          this.updateSortStateOfAllColumns(sort);
        });

      from(c.hiddenChange)
        .subscribe(() => {
          this.visibleColumns = this.columnDefs
            .filter(item => item.hidden !== true)
            .sort((a, b) => a.position - b.position);
          this.changeDetectorRef.detectChanges();
        });

    });



    this.visibleColumns = this.columnDefs
      .filter(item => item.hidden !== true)
      .sort((a, b) => a.position - b.position);
    this.changeDetectorRef.detectChanges();
  }

  ngAfterContentInit(): void {
  }

  sortChanged(e: Sort) {
    this.updateSortStateOfAllColumns(e);
  }

  /**
   * Update the sort state of all columns.
   * @param sort The new state.
   * @private
   */
  private updateSortStateOfAllColumns(sort: Sort) {
    this.columnDefs.forEach(columnDef => {
      columnDef.sortDirection = sort.direction;
      columnDef.idOfMostRecentlySortedSortable = sort.active;
    });
  }

  /**
   * Select or unselect the cell.
   */
  selectCell(e: Event) {
    console.log(e);
  }
}
