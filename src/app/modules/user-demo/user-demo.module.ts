import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDemoComponent } from './user-demo.component';
import {UserDemoRoutingModule} from './user-demo-routing.module';
import {ChipListModule} from '../../shared/components/chip-list/chip-list.module';
import {UserDemoService} from './services/user-demo.service';
import {NoDataFoundModule} from '../../shared/pipes/no-data-found/no-data-found.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UserDemoComponent
  ],
    imports: [
        CommonModule,
        UserDemoRoutingModule,
        ChipListModule,
        NoDataFoundModule,
        ReactiveFormsModule
    ],
  providers: [
    UserDemoService
  ]
})
export class UserDemoModule { }
