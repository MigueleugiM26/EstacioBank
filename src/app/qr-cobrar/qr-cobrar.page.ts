import { Component, OnInit } from '@angular/core';
import { ClipboardService } from '../clipboard.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as QRCode from 'qrcode-generator';

@Component({
  selector: 'app-qr-cobrar',
  templateUrl: './qr-cobrar.page.html',
  styleUrls: ['./qr-cobrar.page.scss'],
})
export class QrCobrarPage implements OnInit {
  cobrarForm: FormGroup;
  qrCodeValue: string | null = null;

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
    const cpf = this.authService.getRawCPF();
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
  
    const encryptedPart = btoa(`c${cpf}d${numericAmount}`);
    const result = `https://estaciobank.com/${encryptedPart}`;
  
    const typeNumber = 15;
    const errorCorrectionLevel = 'L';
    const qr = QRCode(typeNumber, errorCorrectionLevel);
    qr.addData(result);
    qr.make();

    const img = qr.createImgTag();

    this.qrCodeValue = img;
  }  
}
