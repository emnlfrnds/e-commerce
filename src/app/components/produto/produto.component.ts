import { Component } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { MeuPipePipe } from '../../pipes/meu-pipe';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, CurrencyPipe, MeuPipePipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto
{
  // produto = "Monitor";
  // valor = 900;
  // mostrarProduto = true;
  // mostrarValor = true;

  mostrarValor = true;
  mostrarProduto = true;
  produtos = [
    {produto: 'monitor', valor: 799},
    {produto: 'teclado', valor: 29.90},
    {produto: 'mouse', valor: 39.90},
  ];
}
