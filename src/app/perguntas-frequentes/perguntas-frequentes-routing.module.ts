import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerguntasFrequentesPage } from './perguntas-frequentes.page';

const routes: Routes = [
  {
    path: '',
    component: PerguntasFrequentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerguntasFrequentesPageRoutingModule {}
