import {AfterViewInit, ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {CdkScrollable} from '@angular/cdk/overlay';

@Component({
  selector: 'ngx-mat-datagrid-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RowComponent {
  /**
   * Reference to the scrollable content.
   */
  @ViewChild(CdkScrollable, {read: CdkScrollable}) scrollableContent: CdkScrollable;


}
