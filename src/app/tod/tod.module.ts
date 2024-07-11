import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodPageRoutingModule } from './tod-routing.module';

import { TodPage } from './tod.page';

import { TodmodalPage } from "../modals/todmodal/todmodal.page";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodPageRoutingModule
  ],
  declarations: [TodPage,TodmodalPage],
 // entryComponents:[TodmodalPage]
})
export class TodPageModule {}
