import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investir',
  templateUrl: './investir.page.html',
  styleUrls: ['./investir.page.scss'],
})

export class InvestirPage {
  constructor(private router: Router) {}

  navigateToMenuPrincipal() {
    this.router.navigate(['menu-principal']);
  }  
}
