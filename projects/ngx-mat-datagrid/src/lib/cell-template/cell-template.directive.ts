import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngxMatDataGridCellTemplate]'
})
export class CellTemplateDirective {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
