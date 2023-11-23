import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  registrationForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.registrationForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
    
  }

  navigateToMenuPrincipal() {
    this.router.navigate(['menu-principal']);
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }

  navigateToSignIn() {
    this.router.navigate(['sign-in']);
  }

  extractDigits(inputString: string): string {
    return inputString.replace(/\D/g, '');
  }

  async register() {
    const nome = this.registrationForm.get('nome')?.value!;
    const sobrenome = this.registrationForm.get('sobrenome')?.value!;
    const cpf = this.registrationForm.get('cpf')?.value!;
    const email = this.registrationForm.get('email')?.value!;
    const password = this.registrationForm.get('password')?.value!;
    const confirmPassword = this.registrationForm.get('confirmPassword')?.value!;

    const cleanCPF = this.extractDigits(cpf);
  
    if (this.registrationForm.valid && nome != null && sobrenome != null && cpf != null) {
      if (nome != null && /[0-9\s]/.test(nome)) {
        alert('Nome não deve conter números ou espaços.');
        return;
      }
      else {
        if (sobrenome != null && /[0-9\s]/.test(sobrenome)) {
          alert('Sobrenome não deve conter números ou espaços.');
          return;
        }
        else {
          if (cpf != null && /[a-zA-Z]/.test(cpf)) {
            alert('CPF não deve conter letras.');
            return;
          }
          else {
            if (cleanCPF.length == 11){
              const isUnique = await this.authService.isCPFUnique(cleanCPF);
              
              if (isUnique) {
                if (password.trim() === confirmPassword.trim()) {
                  if (password.length >= 8) {
                    this.authService.register(nome, sobrenome, cleanCPF, email, password)
                    .then(() => {
                      alert('Parabéns! Sua conta foi criada com sucesso. Agora você pode fazer login para explorar nosso serviço.');
                      this.registrationForm.reset();
                    })
                    .catch((error) => {
                      alert(`Desculpe, ocorreu um erro ao criar sua conta. Por favor, tente novamente mais tarde. Se o problema persistir, entre em contato com o suporte.`);
                    });
                  } else {
                    alert('A senha deve ter pelo menos 8 caracteres.');
                  }
                } else {
                  alert('As senhas fornecidas não coincidem. Certifique-se de digitar a mesma senha nos dois campos.');
                }
              }
              else {
                alert('Esse CPF já está em uso.')
              }
            }
            else {
              alert('O CPF deve conter 11 números.')
            }
          }
        }
      }


    } else {
      alert('Por favor, preencha todos os campos obrigatórios para criar sua conta. Nenhum campo pode ser deixado em branco.');
    }
  }
  
}
