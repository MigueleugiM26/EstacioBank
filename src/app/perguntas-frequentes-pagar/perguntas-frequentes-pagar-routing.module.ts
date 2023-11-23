import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerguntasFrequentesPagarPage } from './perguntas-frequentes-pagar.page';

const routes: Routes = [
  {
    path: '',
    component: PerguntasFrequentesPagarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerguntasFrequentesPagarPageRoutingModule {}
