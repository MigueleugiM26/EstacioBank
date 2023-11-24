import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import { IonicSlides } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu-principal-escondido',
  templateUrl: './menu-principal-escondido.page.html',
  styleUrls: ['./menu-principal-escondido.page.scss'],
  
})
export class MenuPrincipalEscondidoPage {
  constructor(private router: Router, private authService: AuthService) {}

  swiperModules = [IonicSlides];

  nome: string | null = null; 
  sobrenome: string | null = null; 

  ngOnInit() {
    this.getNome();
    this.getSobrenome();
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }  

  navigateToConta () {
    this.router.navigate(['conta-escondida']);
  }

  navigateToView () {
    this.router.navigate(['menu-principal']);
  }

  navigateToPerguntasFrequentes () {
    this.router.navigate(['perguntas-frequentes']);
  }

  navigateToFuncionalidadesEscondidas () {
    this.router.navigate(['funcionalidades-escondidas']);
  }

  navigateToHistoricoEscondido () {
    this.router.navigate(['historico-escondido']);
  }

  getNome() {
    this.authService.getNome().then((nome) => {
      this.nome = nome;
    });
  }

  getSobrenome() {
    this.authService.getSobrenome().then((sobrenome) => {
      this.sobrenome = sobrenome;
    });
  }
}

new Swiper("#swiper-1", {
  effect: "fade",
  pagination: {
    el: "#swiper-1 .swiper-pagination",
    clickable: true,  
  }
});