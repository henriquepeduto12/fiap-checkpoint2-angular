import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3-lista-dinamica',
  templateUrl: './ex3-lista-dinamica.component.html'
})
export class Ex3ListaDinamicaComponent {
  itens: string[] = ['Maçã', 'Banana', 'Leite'];

  trackByIndex(index: number): number {
    return index;
  }
}