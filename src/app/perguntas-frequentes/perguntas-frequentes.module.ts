import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerguntasFrequentesPageRoutingModule } from './perguntas-frequentes-routing.module';

import { PerguntasFrequentesPage } from './perguntas-frequentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerguntasFrequentesPageRoutingModule
  ],
  declarations: [PerguntasFrequentesPage]
})
export class PerguntasFrequentesPageModule {}
