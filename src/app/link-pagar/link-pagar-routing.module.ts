import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinkPagarPage } from './link-pagar.page';

const routes: Routes = [
  {
    path: '',
    component: LinkPagarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinkPagarPageRoutingModule {}
