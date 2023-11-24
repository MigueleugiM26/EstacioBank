import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaEscondidaPageRoutingModule } from './conta-escondida-routing.module';

import { ContaEscondidaPage } from './conta-escondida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaEscondidaPageRoutingModule
  ],
  declarations: [ContaEscondidaPage]
})
export class ContaEscondidaPageModule {}
