import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDetailsComponent } from './list-details/list-details.component';

import { ListPage } from './list.page';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./list.page').then((m) => m.ListPage),
  },
  {
    path: ':productId',
    loadComponent: () =>
      import('./list-details/list-details.component').then(
        (m) => m.ListDetailsComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
