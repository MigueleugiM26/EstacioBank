import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionalidadesEscondidasPage } from './funcionalidades-escondidas.page';

const routes: Routes = [
  {
    path: '',
    component: FuncionalidadesEscondidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionalidadesEscondidasPageRoutingModule {}
