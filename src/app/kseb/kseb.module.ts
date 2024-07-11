import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KsebPageRoutingModule } from './kseb-routing.module';

import { KsebPage } from './kseb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KsebPageRoutingModule
  ],
  declarations: [KsebPage]
})
export class KsebPageModule {}
