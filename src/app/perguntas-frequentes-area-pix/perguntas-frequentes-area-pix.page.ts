import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perguntas-frequentes-area-pix',
  templateUrl: './perguntas-frequentes-area-pix.page.html',
  styleUrls: ['./perguntas-frequentes-area-pix.page.scss'],
})
export class PerguntasFrequentesAreaPixPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    window.history.back();
  }
}
