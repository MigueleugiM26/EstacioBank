import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-emprestimos',
  templateUrl: './emprestimos.page.html',
  styleUrls: ['./emprestimos.page.scss'],
})
export class EmprestimosPage {

  constructor(private transferService: TransferService) { }

  goBack() {
    window.history.back();
  }

  emprestimo (){
    this.transferService.emprestimo();
  }
}
