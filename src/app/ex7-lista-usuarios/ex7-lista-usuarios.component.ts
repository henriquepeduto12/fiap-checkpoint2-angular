import { Component } from '@angular/core';

@Component({
  selector: 'app-ex7-lista-usuarios',
  templateUrl: './ex7-lista-usuarios.component.html'
})
export class Ex7ListaUsuariosComponent {
  usuarios = [{ nome: 'Ana', idade: 25 }, { nome: 'Carlos', idade: 30 }];

  trackByUsuario(index: number, user: any) {
    return user.nome;
  }
}