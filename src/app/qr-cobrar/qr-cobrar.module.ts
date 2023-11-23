import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrCobrarPageRoutingModule } from './qr-cobrar-routing.module';

import { QrCobrarPage } from './qr-cobrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrCobrarPageRoutingModule
  ],
  declarations: []
})
export class QrCobrarPageModule {}
