import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestirEcogrowPage } from './investir-ecogrow.page';

const routes: Routes = [
  {
    path: '',
    component: InvestirEcogrowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestirEcogrowPageRoutingModule {}
