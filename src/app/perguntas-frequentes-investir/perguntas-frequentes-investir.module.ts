import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerguntasFrequentesInvestirPageRoutingModule } from './perguntas-frequentes-investir-routing.module';

import { PerguntasFrequentesInvestirPage } from './perguntas-frequentes-investir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerguntasFrequentesInvestirPageRoutingModule
  ],
  declarations: [PerguntasFrequentesInvestirPage]
})
export class PerguntasFrequentesInvestirPageModule {}
