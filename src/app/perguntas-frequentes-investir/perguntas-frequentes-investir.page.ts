import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perguntas-frequentes-investir',
  templateUrl: './perguntas-frequentes-investir.page.html',
  styleUrls: ['./perguntas-frequentes-investir.page.scss'],
})
export class PerguntasFrequentesInvestirPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    window.history.back();
  }
}
