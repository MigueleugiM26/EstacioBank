import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage {
  constructor(private router: Router) {}

  navigateToMenuPrincipal () {
    this.router.navigate(['menu-principal']);
  }
}
