import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClipboardService } from '../clipboard.service';
import { Share } from '@capacitor/share';
import { Plugins } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
})
export class PagarPage {
  imageUrl: string | undefined;
  
  constructor(private router: Router, private clipboardService: ClipboardService) {}

  navigateToMenuPrincipal() {
    this.router.navigate(['menu-principal']);
  }  

  navigateToAjuda() {
    this.router.navigate(['perguntas-frequentes-pagar']);
  }  

  navigateToLinkPagar() {
    this.router.navigate(['link-pagar']);
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
}
