import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FetchbillPage } from './fetchbill.page';

const routes: Routes = [
  {
    path: '',
    component: FetchbillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FetchbillPageRoutingModule {}
