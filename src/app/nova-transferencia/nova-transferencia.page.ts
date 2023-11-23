import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.page.html',
  styleUrls: ['./nova-transferencia.page.scss'],
})
export class NovaTransferenciaPage implements OnInit {
  transferirForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private transferService: TransferService
    ) {
      this.transferirForm = this.formBuilder.group({
        destinatario: ['', [Validators.required]],
        quantia: ['', [Validators.required]],
      });
     }

  ngOnInit() {
  }

  goBack() {
    window.history.back();
  }

  extractDigits(inputString: string): string {
    return inputString.replace(/\D/g, '');
  }

  transferir(){
    const destinatario = this.transferirForm.get('destinatario')?.value!;
    const quantia = this.transferirForm.get('quantia')?.value!;
    const cleanDestinatario = this.extractDigits(destinatario);

    if (cleanDestinatario.length == 11) {
      this.transferService.transferMoney(cleanDestinatario, quantia);
    }
    else {
      alert("Insira um CPF.")

    }
  }

}
