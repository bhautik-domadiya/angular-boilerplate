import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseLayoutRoutingModule } from './base-layout-routing.module';
import { BaseLayoutComponent } from './base-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    BaseLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BaseLayoutRoutingModule
  ]
})
export class BaseLayoutModule { }
