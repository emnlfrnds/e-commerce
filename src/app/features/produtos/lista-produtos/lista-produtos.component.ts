import { Component, signal, computed, effect, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UpperCasePipe } from '@angular/common';
import { valorFormatadoPipe } from '../../../shared/pipes/valor-formatado-pipe';

import { Produto } from '../produto/produto.component';
import { produtosService } from '../../produtos.service';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, valorFormatadoPipe, UpperCasePipe],
  templateUrl: './lista-produtos.component.html'
})

export class ListaProdutos {

  //? Signals

  produtos = signal<{ nome: string; valor: number }[]>([]);

  produtoSelecionado = signal<string | null>(null);

  carrinho = signal<{ nome: string; valor: number }[]>([]);

  carregando = signal(true);

  //? Computed

  totalProdutos = computed(() => this.produtos().length);
  valorTotal = computed(() => { return this.produtos().reduce((total, item) => total + item.valor, 0) });
  quantidadeCarrinho = computed(() => this.carrinho().length);
  totalCarrinho = computed(() => { return this.carrinho().reduce((total, item) => total + item.valor, 0) });

  //? Construtor

  constructor(private http: HttpClient) {
    this.carregarProdutos();

    effect(() => {
      console.log("Lista de Produtos alterada: ", this.produtos());
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

  //! Método Http (API)

  carregarProdutos() {

    this.carregando.set ( true );

    this.produtosService.buscarProdutos().subscribe({
      next: (dados) => {
        const produtos = this.produtosService.transformarProdutos(dados);
        this.produtos.set(produtos);
        this.carregando.set(false);
      },
      error: (e) => {
        console.error("Erro ao carregar os produtos: ", e);
        this.carregando.set(false);
      }
    });
  }

  //? Métodos Existentes

  exibirProduto(nome: string) {
    this.produtoSelecionado.set(nome);
  }

  adicionarProduto() {
    this.produtos.update(ListaAtual => [
      ...ListaAtual, { nome: 'Sony Playstation 5', valor: 7599 }
    ]);
  }

  substituirProdutos() {
    this.produtos.set([
      { nome: 'Arroz Fazenda', valor: 2.49 },
    ]);
  }

  adicionarAoCarrinho(produto: { nome: string; valor: number }) {
    this.carrinho.update(listaAtual => [...listaAtual, produto]);
  }

  //* Inject

  private produtosService = inject(produtosService);

}
