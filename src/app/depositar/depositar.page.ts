import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.page.html',
  styleUrls: ['./depositar.page.scss'],
})
export class DepositarPage {
  constructor(private router: Router, private authService: AuthService,) {}

  cpf: string | null = null; 
  chaveAleatoria: string | null = null; 

  ngOnInit() {
    this.getCPF();
    this.getChaveAleatoria();
  }

  navigateToMenuPrincipal() {
    this.router.navigate(['menu-principal']);
  }  

  navigateToAjuda() {
    this.router.navigate(['perguntas-frequentes-deposito']);
  }  

  getCPF() {
    this.authService.getCPF().then((cpf) => {
      this.cpf = cpf;
    });
  }

  getChaveAleatoria() {
    this.authService.getChaveAleatoria().then((chaveAleatoria) => {
      this.chaveAleatoria = chaveAleatoria;
    });
  }
}
