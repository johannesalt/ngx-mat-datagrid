import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Sort, SortDirection} from '@angular/material/sort';
import {ResizeEvent} from 'angular-resizable-element';

@Component({
  selector: 'ngx-mat-datagrid-header-cell',
  templateUrl: './header-cell.component.html',
  styleUrls: ['./header-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HeaderCellComponent implements OnInit {
  /**
   * Whether the column is sortable. Default value is false.
   * @memberOf HeaderCellComponent
   */
  @Input()
  public sortable = false;

  /**
   * Value indicating whether the user can resize the column.
   * @memberOf HeaderCellComponent
   */
  @Input()
  public resizable = false;

  /**
   * Value indicating whether the pinning is disabled.
   */
  @Input()
  public disablePinning = false;

  /**
   * Text label that should be used for the column.
   * @memberOf HeaderCellComponent
   */
  @Input()
  public headerText: string;

  /**
   * Message to be displayed in the tooltip.
   * @memberOf HeaderCellComponent
   */
  @Input()
  public headerTooltip: string;

  /**
   * Column name that should be used to reference this column.
   * @memberOf HeaderCellComponent
   */
  @Input()
  public name: string;

  /**
   * The class selector of the column header.
   * @private
   * @memberOf HeaderCellComponent
   */
  @Input()
  @HostBinding('class')
  public headerClasses: string;

  /**
   * The sort sortDirection of the currently active MatSortable.
   * @private
   * @memberOf HeaderCellComponent
   */
  @Input()
  public sortDirection: SortDirection;

  /**
   * The Id of the most recently sorted MatSortable.
   * @private
   * @memberOf HeaderCellComponent
   */
  @Input()
  public idOfMostRecentlySortedSortable: string;

  /**
   * Value indicating whether the column is pinned.
   * @memberOf HeaderCellComponent
   */
  @Input()
  public pinned = false;

  /**
   * Event emitted when the user resized the column.
   * @memberOf HeaderCellComponent
   */
  @Output()
  public resized: EventEmitter<number> = new EventEmitter<number>();

  /**
   * Event emitted when the user pin the column.
   * @memberOf HeaderCellComponent
   */
  @Output()
  public pin: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Event emitted when the user unpin the column.
   * @memberOf HeaderCellComponent
   */
  @Output()
  public unpin: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Event emitted when the user changes either the active sort or sort sortDirection.
   * @memberOf HeaderCellComponent
   */
  @Output()
  public sortChange: EventEmitter<Sort> = new EventEmitter<Sort>();

  /**
   * Called after the default change detector has checked the directive's data-bound properties for the first time,
   * and before any of the view or content children has been checked. It's invoked only once when the component
   * is instantiated.
   * @memberOf HeaderCellComponent
   */
  public ngOnInit(): void {
  }

  /**
   * Called when user is resized the column.
   * @param e Event arguments.
   */
  public resizing(e: ResizeEvent): void {
    if (e.edges.right) {
      this.resized.emit(e.rectangle.width);
    }
  }
}
