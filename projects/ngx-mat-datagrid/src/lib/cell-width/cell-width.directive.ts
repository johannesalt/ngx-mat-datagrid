import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[ngxMatDataGridCellWidth]'
})
export class CellWidthDirective {

  /**
   * The width of the cell.
   */
  @Input()
  @HostBinding('style.flex-basis.px')
  @HostBinding('style.min-width.px')
  @HostBinding('style.max-width.px')
  @HostBinding('style.width.px')
  width: number|undefined;

}
