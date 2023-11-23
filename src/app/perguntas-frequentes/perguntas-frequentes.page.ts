import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perguntas-frequentes',
  templateUrl: './perguntas-frequentes.page.html',
  styleUrls: ['./perguntas-frequentes.page.scss'],
})
export class PerguntasFrequentesPage {
  constructor(private router: Router) {}

  navigateToMenuPrincipal () {
    this.router.navigate(['menu-principal']);
  }

  goBack() {
    window.history.back();
  }
}
