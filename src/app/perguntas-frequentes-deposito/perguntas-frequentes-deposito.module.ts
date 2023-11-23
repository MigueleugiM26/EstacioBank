import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerguntasFrequentesDepositoPageRoutingModule } from './perguntas-frequentes-deposito-routing.module';

import { PerguntasFrequentesDepositoPage } from './perguntas-frequentes-deposito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerguntasFrequentesDepositoPageRoutingModule
  ],
  declarations: [PerguntasFrequentesDepositoPage]
})
export class PerguntasFrequentesDepositoPageModule {}
