import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerguntasFrequentesPagarPageRoutingModule } from './perguntas-frequentes-pagar-routing.module';

import { PerguntasFrequentesPagarPage } from './perguntas-frequentes-pagar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerguntasFrequentesPagarPageRoutingModule
  ],
  declarations: [PerguntasFrequentesPagarPage]
})
export class PerguntasFrequentesPagarPageModule {}
