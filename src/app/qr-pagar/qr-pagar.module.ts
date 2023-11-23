import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrPagarPageRoutingModule } from './qr-pagar-routing.module';

import { QrPagarPage } from './qr-pagar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrPagarPageRoutingModule
  ],
  declarations: [QrPagarPage]
})
export class QrPagarPageModule {}
