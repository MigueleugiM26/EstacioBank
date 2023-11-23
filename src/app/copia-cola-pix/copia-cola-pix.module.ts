import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CopiaColaPixPageRoutingModule } from './copia-cola-pix-routing.module';

import { CopiaColaPixPage } from './copia-cola-pix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CopiaColaPixPageRoutingModule
  ],
  declarations: [CopiaColaPixPage]
})
export class CopiaColaPixPageModule {}
