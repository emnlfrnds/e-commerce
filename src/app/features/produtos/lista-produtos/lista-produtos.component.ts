import { Component, signal, computed, effect } from '@angular/core';
import { Produto } from '../produto/produto.component';
import { UpperCasePipe } from '@angular/common';
import { valorFormatadoPipe } from '../../../shared/pipes/valor-formatado-pipe';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, valorFormatadoPipe, UpperCasePipe],
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

  // Funcionalidades

  adicionarProduto() {
    this.produtos.update(ListaAtual => [
      ...ListaAtual, {nome: 'Sony Playstation 5', valor: 7599}
    ]);
  }

  substituirProdutos() {
    this.produtos.set([
      {nome: 'Arroz Fazenda', valor: 2.49},
    ]);
  }

  // Informações

  totalProdutos = computed(() => this.produtos().length);
  valorTotal = computed(() => { return this.produtos().reduce((total, item) => total + item.valor, 0)});

  construtor() {
    effect(() => {
      console.log("Lista de Produtos Alterados: ", this.produtos());
    });
    effect(() => {
      console.log("Valor total atualizado: ", this.valorTotal());
    });
    effect(() => {
      if (typeof document !== "undefined") {
          document.title = `(${this.totalProdutos()}) Minha Loja`;
      }
    });
  }



  produtoSelecionado = signal <string | null> (null);

  carrinho = signal <{nome: string; valor: number}[]>([]);

  quantidadeCarrinho = computed(() => this.carrinho().length);

  totalCarrinho = computed(() => { return this.carrinho().reduce((total, item) => total + item.valor, 0)});

  adicionarAoCarrinho (produto: {nome: string; valor: number}) {
    this.carrinho.update(listaAtual => [...listaAtual, produto]);
  }

  removeTodosProdutos() {
    this.produtos.set([])
  }

}
