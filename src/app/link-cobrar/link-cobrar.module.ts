import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinkCobrarPageRoutingModule } from './link-cobrar-routing.module';

import { LinkCobrarPage } from './link-cobrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinkCobrarPageRoutingModule
  ],
  declarations: []
})
export class LinkCobrarPageModule {}
