import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaPixPageRoutingModule } from './area-pix-routing.module';

import { AreaPixPage } from './area-pix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreaPixPageRoutingModule
  ],
  declarations: [AreaPixPage]
})
export class AreaPixPageModule {}
