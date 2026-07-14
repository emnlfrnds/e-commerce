import { Component } from '@angular/core';
import { Produto } from '../produto/produto.component';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css',
})
export class ListaProdutos {
  produtos = [
    {nome: 'Mouse', valor: 19.90},
    {nome: 'Teclado', valor: 47.80},
    {nome: 'Monitor', valor: 259.99},
  ];
}
