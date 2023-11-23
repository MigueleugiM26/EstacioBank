import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerguntasFrequentesCobrarPage } from './perguntas-frequentes-cobrar.page';

const routes: Routes = [
  {
    path: '',
    component: PerguntasFrequentesCobrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerguntasFrequentesCobrarPageRoutingModule {}
