import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestirEstacioPage } from './investir-estacio.page';

const routes: Routes = [
  {
    path: '',
    component: InvestirEstacioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestirEstacioPageRoutingModule {}
