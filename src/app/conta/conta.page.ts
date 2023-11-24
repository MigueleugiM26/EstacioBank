import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {

  nome: string | null = null; 
  sobrenome: string | null = null; 
  email: string | null = null; 
  cpf: string | null = null; 
  chaveAleatoria: string | null = null; 
  cartao: string | null = null; 
  conta: string | null = null; 
  cvv: string | null = null; 


  constructor(private router: Router, private authService: AuthService, private navCtrl: NavController) { }

  navigateToMenuPrincipal() {
    this.router.navigate(['menu-principal']);
  }  

  restartApp() {
    this.navCtrl.navigateRoot('login', { animated: true, animationDirection: 'back' });
  }

  ngOnInit() {
    this.getNome();
    this.getSobrenome();
    this.getEmail();
    this.getCPF();
    this.getChaveAleatoria();
    this.getCartao();
    this.getConta();
    this.getCVV();
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

  getEmail() {
    this.authService.getEmail().then((email) => {
      this.email = email;
    });
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

  getCartao() {
    this.authService.getNumCartao().then((cartao) => {
      this.cartao = cartao;
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
}
