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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, LoginPage, SignInPage, TransferirPixPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, NoopAnimationsModule, 
    ClipboardModule, MatSnackBarModule, BrowserAnimationsModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
