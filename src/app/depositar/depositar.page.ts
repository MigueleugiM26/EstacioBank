import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.page.html',
  styleUrls: ['./depositar.page.scss'],
})
export class DepositarPage {
  constructor(private router: Router) {}

  navigateToMenuPrincipal() {
    this.router.navigate(['menu-principal']);
  }  
}
