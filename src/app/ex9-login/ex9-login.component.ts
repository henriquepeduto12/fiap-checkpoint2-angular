import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9-login',
  templateUrl: './ex9-login.component.html'
})
export class Ex9LoginComponent {
  email = '';
  senha = '';
  mensagem = '';

  login() {
    if (!this.email || !this.senha) {
      this.mensagem = 'Campos obrigatórios!';
    } else if (!this.email.includes('@') || this.senha.length < 6) {
      this.mensagem = 'Credenciais inválidas!';
    } else if (this.email === 'user@teste.com' && this.senha === '123456') {
      this.mensagem = 'Login bem-sucedido!';
    } else {
      this.mensagem = 'Credenciais inválidas!';
    }
  }
}