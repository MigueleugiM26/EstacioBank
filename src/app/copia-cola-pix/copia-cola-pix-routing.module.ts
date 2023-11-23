import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CopiaColaPixPage } from './copia-cola-pix.page';

const routes: Routes = [
  {
    path: '',
    component: CopiaColaPixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CopiaColaPixPageRoutingModule {}
