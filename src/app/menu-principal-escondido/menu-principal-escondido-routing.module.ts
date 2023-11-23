import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPrincipalEscondidoPage } from './menu-principal-escondido.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPrincipalEscondidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPrincipalEscondidoPageRoutingModule {}
