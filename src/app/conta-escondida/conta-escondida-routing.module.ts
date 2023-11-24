import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaEscondidaPage } from './conta-escondida.page';

const routes: Routes = [
  {
    path: '',
    component: ContaEscondidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaEscondidaPageRoutingModule {}
