import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrPagarPageRoutingModule } from './qr-pagar-routing.module';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QrPagarPage } from './qr-pagar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrPagarPageRoutingModule,
    ZXingScannerModule
  ],
  declarations: [QrPagarPage]
})
export class QrPagarPageModule {}

