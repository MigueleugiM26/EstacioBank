import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPrincipalEscondidoPageRoutingModule } from './menu-principal-escondido-routing.module';

import { MenuPrincipalEscondidoPage } from './menu-principal-escondido.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPrincipalEscondidoPageRoutingModule
  ],
  declarations: [MenuPrincipalEscondidoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MenuPrincipalEscondidoPageModule {}
