import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10-produtos-promocao',
  templateUrl: './ex10-produtos-promocao.component.html',
  styleUrls: ['./ex10-produtos-promocao.component.css']
})
export class Ex10ProdutosPromocaoComponent {
  produtos = [
    { nome: 'Notebook', preco: 3000, promocao: true },
    { nome: 'Mouse', preco: 50, promocao: false }
  ];

  trackByProduto(index: number, p: any) {
    return p.nome;
  }
}