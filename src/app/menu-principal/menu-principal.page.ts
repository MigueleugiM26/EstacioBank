import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import { IonicSlides } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
  
})
export class MenuPrincipalPage {
  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  swiperModules = [IonicSlides];

  saldo: string | null = null; 
  nome: string | null = null; 
  sobrenome: string | null = null; 
  numeroCartao: string | null = null;
  validade: string | null = null;
  conta: string | null = null;
  cvv: string | null = null;

  ngOnInit() {
    this.getSaldo();
    this.getNome();
    this.getSobrenome();
    this.getNumCartao();
    this.getValidade();
    this.getConta();
    this.getCVV();
  }

  ionViewWillEnter() {
    this.getSaldo();
    this.getNome();
    this.getSobrenome();
    this.getNumCartao();
    this.getValidade();
    this.getConta();
    this.getCVV();
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }  

  navigateToSecret () {
    this.router.navigate(['menu-principal-escondido']);
  }

  navigateToEmprestimos () {
    this.router.navigate(['emprestimos']);
  }

  refresh(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  navigateToPerguntasFrequentes () {
    this.router.navigate(['perguntas-frequentes']);
  }

  navigateToAreaPix () {
    this.router.navigate(['area-pix']);
  }

  navigateToTansferir () {
    this.router.navigate(['transferir']);
  }

  navigateToCobrar () {
    this.router.navigate(['cobrar']);
  }

  navigateToDepositar () {
    this.router.navigate(['depositar']);
  }

  navigateToInvestir () {
    this.router.navigate(['investir']);
  }

  navigateToPagar () {
    this.router.navigate(['pagar']);
  }

  navigateToHistorico () {
    this.router.navigate(['historico']);
  }

  getSaldo() {
    this.authService.getSaldo().then((saldo) => {
      this.saldo = saldo;
    });
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

  getNumCartao() {
    this.authService.getNumCartao().then((numeroCartao) => {
      this.numeroCartao = numeroCartao;
    });
  }

  getValidade() {
    this.authService.getValidade().then((validade) => {
      this.validade = validade;
    });
  }

  getConta() {
    this.authService.getConta().then((conta) => {
      this.conta = conta;
    });
  }

  getCVV() {
    this.authService.getCVV().then((cvv) => {
      this.cvv = cvv;
    });
  }

  async update() {
    await Promise.all([
      this.getNome(),
      this.getSobrenome(),
      this.getNumCartao(),
      this.getValidade(),
      this.getConta(),
      this.getCVV(),
    ]);
  }
}

new Swiper("#swiper-1", {
  effect: "fade",
  pagination: {
    el: "#swiper-1 .swiper-pagination",
    clickable: true,  
  }
});