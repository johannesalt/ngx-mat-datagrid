import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ngx-mat-datagrid-pinning',
  templateUrl: './pinning.component.html',
  styleUrls: ['./pinning.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('pinOrUnpinRowOrColumn', [
      state('pin', style({})),
      state('unpin', style({
        transform: 'rotate(90deg)'
      })),
      transition('pin => unpin', [
        animate('200ms')
      ]),
      transition('unpin => pin', [
        animate('200ms')
      ]),

    ])
  ]
})
export class PinningComponent {

  /**
   * Value indicating whether the column is pinned.
   */
  @Input()
  public pinned = false;

  /**
   * Event emitted when the user pin the column.
   */
  @Output()
  public pin: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Event emitted when the user unpin the column.
   */
  @Output()
  public unpin: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Pin or unpin the column/row.
   */
  public pinOrUnpinRowOrColumn() {
    if (this.pinned) {
      this.pinned = false;
      this.unpin.emit();
    } else {
      this.pinned = true;
      this.pin.emit();
    }
  }
}
