import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoEscondidoPage } from './historico-escondido.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoEscondidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoEscondidoPageRoutingModule {}
