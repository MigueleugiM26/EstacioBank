import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionalidadesEscondidasPageRoutingModule } from './funcionalidades-escondidas-routing.module';

import { FuncionalidadesEscondidasPage } from './funcionalidades-escondidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncionalidadesEscondidasPageRoutingModule
  ],
  declarations: [FuncionalidadesEscondidasPage]
})
export class FuncionalidadesEscondidasPageModule {}
