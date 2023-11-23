import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferirPixPageRoutingModule } from './transferir-pix-routing.module';

import { TransferirPixPage } from './transferir-pix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferirPixPageRoutingModule
  ],
  declarations: []
})
export class TransferirPixPageModule {}
