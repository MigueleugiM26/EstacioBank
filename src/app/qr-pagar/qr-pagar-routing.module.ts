import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrPagarPage } from './qr-pagar.page';

const routes: Routes = [
  {
    path: '',
    component: QrPagarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrPagarPageRoutingModule {}
