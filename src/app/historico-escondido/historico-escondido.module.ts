import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoEscondidoPageRoutingModule } from './historico-escondido-routing.module';

import { HistoricoEscondidoPage } from './historico-escondido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoEscondidoPageRoutingModule
  ],
  declarations: [HistoricoEscondidoPage]
})
export class HistoricoEscondidoPageModule {}
