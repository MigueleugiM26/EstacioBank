import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaTransferenciaPageRoutingModule } from './nova-transferencia-routing.module';

import { NovaTransferenciaPage } from './nova-transferencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaTransferenciaPageRoutingModule
  ],
  declarations: []
})
export class NovaTransferenciaPageModule {}
