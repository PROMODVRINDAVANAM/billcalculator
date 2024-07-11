import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodmodalPageRoutingModule } from './todmodal-routing.module';

import { TodmodalPage } from './todmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodmodalPageRoutingModule
  ],
  //declarations: [TodmodalPage]
})
export class TodmodalPageModule {}
