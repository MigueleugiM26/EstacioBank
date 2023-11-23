import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrCobrarPage } from './qr-cobrar.page';

const routes: Routes = [
  {
    path: '',
    component: QrCobrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrCobrarPageRoutingModule {}
