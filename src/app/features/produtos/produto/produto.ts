import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-produto',
  imports: [CurrencyPipe, MatButtonModule, MatCardModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  @Input() nome: string = '';
  @Input() preco: number = 0;

  @Output() produtoSelecionado = new EventEmitter<string>();
  selecionarProduto() {
    this.produtoSelecionado.emit(this.nome);
  }

  @Output() produtoAdicionado = new EventEmitter<{
    nome: string;
    preco: number;
  }>();
  adicionarAoCarrinho() {
    this.produtoAdicionado.emit({
      nome: this.nome,
      preco: this.preco
    });
  }
}
