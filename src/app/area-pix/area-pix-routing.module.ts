import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaPixPage } from './area-pix.page';

const routes: Routes = [
  {
    path: '',
    component: AreaPixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaPixPageRoutingModule {}
