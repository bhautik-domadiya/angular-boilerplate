import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoDataFoundPipe} from './no-data-found.pipe';

@NgModule({
  declarations: [
    NoDataFoundPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoDataFoundPipe
  ]
})
export class NoDataFoundModule {
}
