import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { valorFormatadoPipe } from '../../../shared/pipes/valor-formatado-pipe';
import { MatCardModule } from '@angular/material/card';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, valorFormatadoPipe, MatCardModule, MatAnchor],
  templateUrl: './produto.component.html'
})

export class Produto
{
  // Entrada de dados -> lista-produtos.component.ts
  @Input() nome: string = '';
  @Input() valor: number = 0;

  // Saída de dados de produtos selecionados -> lista-produtos.component.ts
  @Output() produtoSelecionado = new EventEmitter<string>();

  @Output() produtoAdicionado = new EventEmitter<{
    nome: string;
    valor: number;
  }>();

  selecionarProduto() {
    this.produtoSelecionado.emit(this.nome);
  }

  adicionarAoCarrinho() {
    this.produtoAdicionado.emit({
      nome: this.nome,
      valor: this.valor
    })
  }
}
