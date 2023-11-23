import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaTransferenciaPage } from './nova-transferencia.page';

const routes: Routes = [
  {
    path: '',
    component: NovaTransferenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaTransferenciaPageRoutingModule {}
