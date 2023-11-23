import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ClipboardService } from '../clipboard.service';
import { Share } from '@capacitor/share';
import { Plugins } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'app-area-pix',
  templateUrl: './area-pix.page.html',
  styleUrls: ['./area-pix.page.scss'],
})

export class AreaPixPage {
  imageUrl: string | undefined;

  constructor(private router: Router,
    private authService: AuthService, private clipboardService: ClipboardService) {}

    cpf: string | null = null; 
    chaveAleatoria: string | null = null; 

    ngOnInit() {
      this.getCPF();
      this.getChaveAleatoria();
    }

  navigateToMenuPrincipal() {
    this.router.navigate(['menu-principal']);
  }  

  navigateToAjuda() {
    this.router.navigate(['perguntas-frequentes-area-pix']);
  }  

  navigateToTransferirPix() {
    this.router.navigate(['transferir-pix']);
  }  

  navigateToCopiaCola() {
    this.router.navigate(['copia-cola-pix']);
  }  

  navigateToQrPagar() {
    this.router.navigate(['qr-pagar']);
  }

  navigateToCobrar() {
    this.router.navigate(['cobrar']);
  }  

  copyText(txt: string): void {
    if (txt){
      this.clipboardService.copyToClipboard(txt);
    }
  }

  async shareText(txt: string) {
    if (txt) {
      await Share.share({
        title: 'Compartilhar por',
        text: txt,
        dialogTitle: 'Compartilhar por',
      });
    }
  }

  async scan() {
    const image = await Camera['getPhoto']({
      resultType: 'uri',
      source: 'camera', 
      quality: 100,
      allowEditing: false,
      promptLabelHeader: "Escanear QR",
      promptLabelCancel: "Cancelar",
      promptLabelPhoto: "Da Galeria",
      promptLabelPicture: "Abrir Câmera",
    });

    this.imageUrl = image.webPath;
  }

  getCPF() {
    this.authService.getCPF().then((cpf) => {
      this.cpf = cpf;
    });
  }

  getChaveAleatoria() {
    this.authService.getChaveAleatoria().then((chaveAleatoria) => {
      this.chaveAleatoria = chaveAleatoria;
    });
  }
}
