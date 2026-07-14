import { Component } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { valorFormatadoPipe } from '../../pipes/pipe';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, CurrencyPipe, valorFormatadoPipe],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css',
})
export class Produto
{
  mostrarValor = true;
  mostrarProduto = true;
  produtos = [
    {produto: 'monitor', valor: 799},
    {produto: 'teclado', valor: 29.90},
    {produto: 'mouse', valor: 39.90},
  ];
}
