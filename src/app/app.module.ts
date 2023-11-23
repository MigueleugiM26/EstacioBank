import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginPage } from './login/login.page';
import { SignInPage } from './sign-in/sign-in.page';
import { TransferirPixPage } from './transferir-pix/transferir-pix.page';
import { LinkCobrarPage } from './link-cobrar/link-cobrar.page';
import { LinkPagarPage } from './link-pagar/link-pagar.page';
import { CopiaColaPixPage } from './copia-cola-pix/copia-cola-pix.page';
import { QrCobrarPage } from './qr-cobrar/qr-cobrar.page';
import { NovaTransferenciaPage } from './nova-transferencia/nova-transferencia.page';
import { InvestirEstacioPage } from './investir-estacio/investir-estacio.page';
import { InvestirTechvestPage } from './investir-techvest/investir-techvest.page';
import { InvestirEcogrowPage } from './investir-ecogrow/investir-ecogrow.page';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [AppComponent, LoginPage, SignInPage, TransferirPixPage, LinkCobrarPage, 
    LinkPagarPage, CopiaColaPixPage, NovaTransferenciaPage, QrCobrarPage, InvestirEstacioPage, InvestirTechvestPage, 
    InvestirEcogrowPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, NoopAnimationsModule, 
    ClipboardModule, MatSnackBarModule, BrowserAnimationsModule, ZXingScannerModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
