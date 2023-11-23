import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historico-escondido',
  templateUrl: './historico-escondido.page.html',
  styleUrls: ['./historico-escondido.page.scss'],
})
export class HistoricoEscondidoPage {
  constructor(private router: Router) {}

  navigateToMenuPrincipal() {
    this.router.navigate(['menu-principal-escondido']);
  }  
}
