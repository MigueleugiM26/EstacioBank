import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionalidades-escondidas',
  templateUrl: './funcionalidades-escondidas.page.html',
  styleUrls: ['./funcionalidades-escondidas.page.scss'],
})
export class FuncionalidadesEscondidasPage {
  constructor(private router: Router) {}

  navigateToMenuPrincipal() {
    this.router.navigate(['menu-principal-escondido']);
  }  
}
