import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perguntas-frequentes-pagar',
  templateUrl: './perguntas-frequentes-pagar.page.html',
  styleUrls: ['./perguntas-frequentes-pagar.page.scss'],
})
export class PerguntasFrequentesPagarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    window.history.back();
  }
}
