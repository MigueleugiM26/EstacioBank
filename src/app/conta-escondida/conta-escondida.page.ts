import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-conta-escondida',
  templateUrl: './conta-escondida.page.html',
  styleUrls: ['./conta-escondida.page.scss'],
})
export class ContaEscondidaPage implements OnInit {
  nome: string | null = null; 
  sobrenome: string | null = null; 

  constructor(private router: Router, private authService: AuthService, private navCtrl: NavController) { }

  navigateToMenuPrincipal() {
    this.router.navigate(['menu-principal-escondido']);
  } 

  restartApp() {
    this.navCtrl.navigateRoot('login', { animated: true, animationDirection: 'back' });
  }

  ngOnInit() {
    this.getNome();
    this.getSobrenome();
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
