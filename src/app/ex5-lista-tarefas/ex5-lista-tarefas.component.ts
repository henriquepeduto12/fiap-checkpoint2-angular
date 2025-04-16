import { Component } from '@angular/core';

@Component({
  selector: 'app-ex5-lista-tarefas',
  templateUrl: './ex5-lista-tarefas.component.html'
})
export class Ex5ListaTarefasComponent {
  tarefas: string[] = ['Estudar Angular', 'Fazer exercícios', 'Revisar código'];

  remover(i: number) {
    this.tarefas.splice(i, 1);
  }
}