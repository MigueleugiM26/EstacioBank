import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'app-qr-pagar',
  templateUrl: './qr-pagar.page.html',
  styleUrls: ['./qr-pagar.page.scss'],
})
export class QrPagarPage {
  imageUrl: string | undefined;

  goBack() {
    window.history.back();
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
