import {NgModule} from '@angular/core';
import {NgxMatDatagridComponent} from './ngx-mat-datagrid.component';
import {PinningComponent} from './pinning/pinning.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    NgxMatDatagridComponent,
    PinningComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  exports: [NgxMatDatagridComponent]
})
export class NgxMatDatagridModule {
}
