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
    {nome: 'Teclado Gamer', valor: 127.90},
    {nome: 'Mouse Gamer', valor: 69.90},
    {nome: 'Mousepad Gamer', valor: 25.90},
    {nome: 'Headset Gamer', valor: 259.99},
    {nome: 'Controle Xbox', valor: 368.00}
  ];
}
