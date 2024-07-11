import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FetchbillPageRoutingModule } from './fetchbill-routing.module';

import { FetchbillPage } from './fetchbill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FetchbillPageRoutingModule
  ],
  declarations: [FetchbillPage]
})
export class FetchbillPageModule {}
