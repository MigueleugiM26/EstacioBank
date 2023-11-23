import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerguntasFrequentesInvestirPage } from './perguntas-frequentes-investir.page';

const routes: Routes = [
  {
    path: '',
    component: PerguntasFrequentesInvestirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerguntasFrequentesInvestirPageRoutingModule {}
