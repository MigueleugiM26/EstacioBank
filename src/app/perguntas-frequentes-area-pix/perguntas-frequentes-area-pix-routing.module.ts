import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerguntasFrequentesAreaPixPage } from './perguntas-frequentes-area-pix.page';

const routes: Routes = [
  {
    path: '',
    component: PerguntasFrequentesAreaPixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerguntasFrequentesAreaPixPageRoutingModule {}
