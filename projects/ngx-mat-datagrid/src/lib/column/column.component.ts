import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Sort, SortDirection} from '@angular/material/sort';

@Component({
  selector: 'ngx-mat-datagrid-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ColumnComponent implements OnInit {
  /**
   * The sort direction of the currently active MatSortable.
   * @memberOf HeaderCellComponent
   */
  private _sortDirection: SortDirection;

  /**
   * The Id of the most recently sorted MatSortable.
   * @memberOf HeaderCellComponent
   */
  private _idOfMostRecentlySortedSortable: string;

  /**
   * A value indicating whether the column is hidden.
   */
  private _hidden: boolean = false;

  /**
   * Reference to the cell header template.
   */
  @ViewChild('header', {static: true})
  public headerCell: TemplateRef<any>;

  /**
   * Reference to the cell template.
   */
  @ViewChild('cell', {static: true})
  public cell: TemplateRef<any>;

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
   * The width of the column.
   */
  @Input()
  public width: number | undefined;

  /**
   * The position of the column.
   */
  @Input()
  public position: number;

  /**
   * Value indicating whether the column is pinned.
   */
  @Input()
  public pinned: boolean = false;

  /**
   * Event emitted when the user hides a column.
   * @memberOf ColumnComponent
   */
  public hiddenChange: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Event emitted when the user changes either the active sort or sort sortDirection.
   * @memberOf ColumnComponent
   */
  public sortChange: EventEmitter<Sort> = new EventEmitter<Sort>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  /**
   * Gets a value indicating whether the column is hidden.
   */
  get hidden(): boolean {
    return this._hidden;
  }

  /**
   * Sets a value indicating whether the column is hidden.
   */
  @Input()
  set hidden(value: boolean) {
    this._hidden = value;
    this.hiddenChange.emit();
  }

  /**
   * Gets the sort direction of the currently active MatSortable.
   */
  get sortDirection(): SortDirection {
    return this._sortDirection;
  }

  /**
   * Sets the sort direction of the currently active MatSortable.
   * @param value
   */
  set sortDirection(value: SortDirection) {
    this._sortDirection = value;
    this.changeDetectorRef.detectChanges();
  }

  /**
   * Gets the Id of the most recently sorted MatSortable.
   */
  get idOfMostRecentlySortedSortable(): string {
    return this._idOfMostRecentlySortedSortable;
  }

  /**
   * Sets the Id of the most recently sorted MatSortable.
   * @param value
   */
  set idOfMostRecentlySortedSortable(value: string) {
    this._idOfMostRecentlySortedSortable = value;
    this.changeDetectorRef.detectChanges();
  }

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
   * @param width New column width.
   */
  public resized(width: number | undefined): void {
    this.width = width;
    this.changeDetectorRef.detectChanges();
  }
}
