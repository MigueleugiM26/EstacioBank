import { Injectable } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
  } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ClipboardService {
  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) {}

  copyToClipboard(text: string): void {
    this.clipboard.copy(text);
    this.showSnackbar('Texto copiado para a área de transferência.');
  }

  private showSnackbar(message: string): void {
    this.snackBar.open(message, '', {
      duration: 2500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: 'custom-snackbar', 
    });
  }
}
