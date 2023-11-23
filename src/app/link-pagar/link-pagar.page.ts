import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-link-pagar',
  templateUrl: './link-pagar.page.html',
  styleUrls: ['./link-pagar.page.scss'],
})
export class LinkPagarPage implements OnInit {
  pagarForm: FormGroup;

  constructor(private transferService: TransferService, private formBuilder:FormBuilder) {
    this.pagarForm = this.formBuilder.group({
      link: ['', [Validators.required]],
    });
   }

  ngOnInit() {
  }

  goBack() {
    window.history.back();
  }

  async pagar(): Promise<{ cpf: string; amount: number } | null> {
    const link = this.pagarForm.get('link')?.value!;
    const match = link.match(/\/c(\d+)d(\d+)/);
  
    if (match) {
      const cpf = match[1];
      const amount = match[2];
      this.transferService.transferMoney(cpf, amount);
      return null;
    }
    alert("Link Inválido.");
    return null;
  }
}
