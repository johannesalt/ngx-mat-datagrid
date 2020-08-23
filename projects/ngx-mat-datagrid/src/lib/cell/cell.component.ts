import {ChangeDetectionStrategy, Component, ContentChild, HostBinding, Input, ViewEncapsulation} from '@angular/core';
import {isObservable} from 'rxjs';
import {CellTemplateDirective} from '../cell-template/cell-template.directive';

@Component({
  selector: 'ngx-mat-datagrid-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CellComponent<T> {

  /**
   * The template used to render the cell.
   */
  @ContentChild(CellTemplateDirective)
  public cellTemplate: CellTemplateDirective;

  /**
   * Column name that should be used to reference this column.
   */
  @Input()
  public name: string;

  /**
   * Object corresponding to this row.
   */
  @Input()
  public element: T;

  /**
   * Value indicating whether the cell is selected or not.
   */
  @Input()
  @HostBinding('class.selected')
  public selected: boolean = false;

  /**
   * Tests to see if the object is an observable.
   * @param obj The object to test.
   */
  public objectIsAnObservable = (obj: any) => isObservable(obj);
}
