import { Component, signal, computed } from '@angular/core';
import { Produto } from '../produto/produto.component';
import { valorFormatadoPipe } from '../../../shared/pipes/valor-formatado-pipe';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, valorFormatadoPipe],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css',
})
export class ListaProdutos {
  produtos = signal([
    {
      nome: 'Teclado Gamer',
      valor: 127.90},
    {
      nome: 'Mouse Gamer',
      valor: 69.90},
    {
      nome: 'Mousepad Gamer',
      valor: 25.90},
    {
      nome: 'Headset Gamer',
      valor: 259.99},
    {
      nome: 'Controle Xbox',
      valor: 368.00},
  ]);

  exibirProduto(nome: string) {
    console.log ('Produto Selecionado: ', nome);
  }

  adicionarProduto() {
    this.produtos.update(ListaAtual => [
      ...ListaAtual, {nome: 'Sony Playstation 5', valor: 7599}
    ]);
  }

  totalProdutos = computed(() => this.produtos().length);

  valorTotal = computed(() => { return this.produtos().reduce((total, item) => total + item.valor, 0)});

  substituirProdutos() {
    this.produtos.set([
      {nome: 'Arroz Fazenda', valor: 2.49},
    ]);
  }
}
