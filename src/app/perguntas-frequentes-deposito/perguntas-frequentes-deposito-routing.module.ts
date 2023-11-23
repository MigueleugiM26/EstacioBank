import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerguntasFrequentesDepositoPage } from './perguntas-frequentes-deposito.page';

const routes: Routes = [
  {
    path: '',
    component: PerguntasFrequentesDepositoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerguntasFrequentesDepositoPageRoutingModule {}
