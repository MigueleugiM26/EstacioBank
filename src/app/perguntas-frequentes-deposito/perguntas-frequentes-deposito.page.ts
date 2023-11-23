import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perguntas-frequentes-deposito',
  templateUrl: './perguntas-frequentes-deposito.page.html',
  styleUrls: ['./perguntas-frequentes-deposito.page.scss'],
})
export class PerguntasFrequentesDepositoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    window.history.back();
  }
}
