import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copia-cola-pix',
  templateUrl: './copia-cola-pix.page.html',
  styleUrls: ['./copia-cola-pix.page.scss'],
})
export class CopiaColaPixPage  {

  constructor() { }

  goBack() {
    window.history.back();
  }
}
