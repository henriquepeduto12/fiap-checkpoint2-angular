import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11-calculadora',
  templateUrl: './ex11-calculadora.component.html'
})
export class Ex11CalculadoraComponent {
  v1 = 0;
  v2 = 0;
  op = 'soma';
  resultado = '';

  calcular() {
    switch (this.op) {
      case 'soma': this.resultado = `${this.v1 + this.v2}`; break;
      case 'subtracao': this.resultado = `${this.v1 - this.v2}`; break;
      case 'multiplicacao': this.resultado = `${this.v1 * this.v2}`; break;
      case 'divisao':
        this.resultado = this.v2 === 0 ? 'Erro: divisão por zero' : `${this.v1 / this.v2}`;
        break;
      default: this.resultado = 'Operação inválida';
    }
  }
}