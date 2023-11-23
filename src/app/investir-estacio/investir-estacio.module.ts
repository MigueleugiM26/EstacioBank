import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestirEstacioPageRoutingModule } from './investir-estacio-routing.module';

import { InvestirEstacioPage } from './investir-estacio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestirEstacioPageRoutingModule
  ],
  declarations: []
})
export class InvestirEstacioPageModule {}
