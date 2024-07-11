import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KsebPage } from './kseb.page';

const routes: Routes = [
  {
    path: '',
    component: KsebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KsebPageRoutingModule {}
