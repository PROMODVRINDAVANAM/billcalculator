import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'fetchbill',
    loadChildren: () => import('./fetchbill/fetchbill.module').then( m => m.FetchbillPageModule)
  },
  {
    path: 'kseb',
    loadChildren: () => import('./kseb/kseb.module').then( m => m.KsebPageModule)
  },
  {
    path: 'tod',
    loadChildren: () => import('./tod/tod.module').then( m => m.TodPageModule)
  },
  {
    path: 'my-modal',
    loadChildren: () => import('./modals/my-modal/my-modal.module').then( m => m.MyModalPageModule)
  },
  {
    path: 'todmodal',
    loadChildren: () => import('./modals/todmodal/todmodal.module').then( m => m.TodmodalPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
