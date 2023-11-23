import { Component, OnInit } from '@angular/core';
import { ClipboardService } from '../clipboard.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as QRCode from 'qrcode-generator';

@Component({
  selector: 'app-qr-pagar',
  templateUrl: './qr-pagar.page.html',
  styleUrls: ['./qr-pagar.page.scss'],
})
export class QrPagarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    window.history.back();
  }
}
