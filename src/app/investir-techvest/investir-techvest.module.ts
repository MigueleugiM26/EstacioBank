import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestirTechvestPageRoutingModule } from './investir-techvest-routing.module';

import { InvestirTechvestPage } from './investir-techvest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestirTechvestPageRoutingModule
  ],
  declarations: []
})
export class InvestirTechvestPageModule {}
