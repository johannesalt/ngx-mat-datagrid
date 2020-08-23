import {NgModule} from '@angular/core';
import {NgxMatDatagridComponent} from './ngx-mat-datagrid.component';
import {HeaderCellComponent} from './header-cell/header-cell.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';
import {MatDividerModule} from '@angular/material/divider';
import {HeaderRowComponent} from './header-row/header-row.component';
import {PinningComponent} from './pinning/pinning.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ColumnComponent} from './column/column.component';
import {CommonModule} from '@angular/common';
import {CellWidthDirective} from './cell-width/cell-width.directive';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {RowComponent} from './row/row.component';
import {CellComponent} from './cell/cell.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ResizableModule} from 'angular-resizable-element';
import {CellTemplateDirective} from './cell-template/cell-template.directive';
import {CellTemplateForObservablesComponent} from './cell-template-for-observables/cell-template-for-observables.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    NgxMatDatagridComponent,
    HeaderCellComponent,
    HeaderRowComponent,
    PinningComponent,
    CellWidthDirective,
    ColumnComponent,
    RowComponent,
    CellComponent,
    CellTemplateDirective,
    CellTemplateForObservablesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSortModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatMenuModule,
    DragDropModule,
    ScrollingModule,
    ResizableModule
  ],
  exports: [
    NgxMatDatagridComponent,
    ColumnComponent
  ]
})
export class NgxMatDatagridModule {
}
