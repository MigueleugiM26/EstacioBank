import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perguntas-frequentes-cobrar',
  templateUrl: './perguntas-frequentes-cobrar.page.html',
  styleUrls: ['./perguntas-frequentes-cobrar.page.scss'],
})
export class PerguntasFrequentesCobrarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    window.history.back();
  }
}
