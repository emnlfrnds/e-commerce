import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { valorFormatadoPipe } from '../../pipes/valor-formatado-pipe';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, valorFormatadoPipe],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css',
})

export class Produto
{

  // Entrada de dados -> lista-produtos.component.ts
  @Input() nome: string = '';
  @Input() valor: number = 0;

  // Saída de dados de produtos selecionados -> lista-produtos.component.ts
  @Output() produtoSelecionado = new EventEmitter<string>();

  selecionarProduto() {
    this.produtoSelecionado.emit(this.nome);
  }

}
