import { Component, OnInit } from '@angular/core';
import { ClipboardService } from '../clipboard.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-link-cobrar',
  templateUrl: './link-cobrar.page.html',
  styleUrls: ['./link-cobrar.page.scss'],
})
export class LinkCobrarPage implements OnInit {
  cobrarForm: FormGroup;

  constructor(private clipboardService: ClipboardService, private formBuilder: FormBuilder, private authService: AuthService) {
    this.cobrarForm = this.formBuilder.group({
      quantia: ['', [Validators.required]],
    });
   }

  ngOnInit() {
  }

  goBack() {
    window.history.back();
  }

  copyText(txt: string): void {
    if (txt){
      this.clipboardService.copyToClipboard(txt);
    }
  }

  async generateLink() {
    const cpf = await this.authService.getRawCPF();
    if (!cpf) {
      return;
    }
  
    const quantia = this.cobrarForm.get('quantia')?.value!;
    const normalizedAmount = quantia.replace(/\./g, '').replace(',', '.');
    const numericAmount = parseFloat(normalizedAmount);
  
    if (isNaN(numericAmount)) {
      alert('Valor inválido.');
      return;
    }
  
    const result = `https://estaciobank.com/c${cpf}d${numericAmount}`;
    this.copyText(result);
  }
  
}
