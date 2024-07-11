import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodmodalPage } from './todmodal.page';

const routes: Routes = [
  {
    path: '',
    component: TodmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodmodalPageRoutingModule {}
