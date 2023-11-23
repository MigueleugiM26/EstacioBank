import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferirPixPage } from './transferir-pix.page';

const routes: Routes = [
  {
    path: '',
    component: TransferirPixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferirPixPageRoutingModule {}
