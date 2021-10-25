import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipListComponent} from './chip-list.component';
import {NoDataFoundModule} from '../../pipes/no-data-found/no-data-found.module';

@NgModule({
  declarations: [
    ChipListComponent
  ],
    imports: [
        CommonModule,
        NoDataFoundModule
    ],
  exports: [ChipListComponent]
})
export class ChipListModule {
}
