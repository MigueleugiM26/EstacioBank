import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  navigateToMenuPrincipal() {
    this.router.navigate(['menu-principal']);
  }

  navigateToSignIn() {
    this.router.navigate(['sign-in']);
  }

  login() {
    const emailControl = this.loginForm.get('email');
    const passwordControl = this.loginForm.get('password');
  
    if (this.loginForm.valid) {
      this.authService.login(emailControl?.value!, passwordControl?.value!)
        .then(() => {
          console.log('Login successful');
          this.loginForm.reset();
          this.navigateToMenuPrincipal();
        })
        .catch((error) => {
          console.error('Login error:', error);
          alert(`As credenciais fornecidas são inválidas. Por favor, verifique seu e-mail e senha e tente novamente.`);
        });
    } else {
      if (emailControl?.hasError('required')) {
        alert('Por favor, insira seu endereço de e-mail para prosseguir.');
      } else if (emailControl?.hasError('email')) {
        alert('O endereço de e-mail inserido não é válido. Certifique-se de que esteja no formato correto (exemplo@dominio.com).');
      } else if (passwordControl?.hasError('required')) {
        alert('Por favor, insira sua senha para continuar.');
      }
    }
  }
}
