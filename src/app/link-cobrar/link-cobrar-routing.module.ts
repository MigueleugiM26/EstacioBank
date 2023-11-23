import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinkCobrarPage } from './link-cobrar.page';

const routes: Routes = [
  {
    path: '',
    component: LinkCobrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinkCobrarPageRoutingModule {}
