import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerguntasFrequentesAreaPixPageRoutingModule } from './perguntas-frequentes-area-pix-routing.module';

import { PerguntasFrequentesAreaPixPage } from './perguntas-frequentes-area-pix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerguntasFrequentesAreaPixPageRoutingModule
  ],
  declarations: [PerguntasFrequentesAreaPixPage]
})
export class PerguntasFrequentesAreaPixPageModule {}
