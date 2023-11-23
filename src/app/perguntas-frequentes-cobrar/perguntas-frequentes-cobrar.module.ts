import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerguntasFrequentesCobrarPageRoutingModule } from './perguntas-frequentes-cobrar-routing.module';

import { PerguntasFrequentesCobrarPage } from './perguntas-frequentes-cobrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerguntasFrequentesCobrarPageRoutingModule
  ],
  declarations: [PerguntasFrequentesCobrarPage]
})
export class PerguntasFrequentesCobrarPageModule {}
