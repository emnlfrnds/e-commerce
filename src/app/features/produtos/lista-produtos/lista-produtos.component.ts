import { Component, signal, computed, effect } from '@angular/core';
import { Produto } from '../produto/produto.component';
import { UpperCasePipe } from '@angular/common';
import { valorFormatadoPipe } from '../../../shared/pipes/valor-formatado-pipe';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, valorFormatadoPipe, UpperCasePipe],
  templateUrl: './lista-produtos.component.html'
})

export class ListaProdutos {

  produtos = signal<{ nome: string; valor: number }[]>([]);
  carregando = signal(true);

  carregarProdutos() {
    this.carregando.set(true);
    this.http.get<
      { title: string; valor: number }[]
    >
      ('https://fakstore.com/products')
      .subscribe({
        next: (dados) => {
          const produtosFormatados = dados.map(p => ({
            nome: p.title, valor: p.valor
          }));
          this.produtos.set(produtosFormatados);
          this.carregando.set(false);
        },
        error: (e) => {
          console.error('Erro ao carregar produtos: ', e);
          this.carregando.set(false);
        }
      })
  }

  // Funcionalidades

  exibirProduto(nome: string) {
    console.log('Produto Selecionado: ', nome);
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

  // Informações

  totalProdutos = computed(() => this.produtos().length);
  valorTotal = computed(() => { return this.produtos().reduce((total, item) => total + item.valor, 0) });

  constructor(private http: HttpClient) {

    this.carregarProdutos();

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

  produtoSelecionado = signal<string | null>(null);

  carrinho = signal<{ nome: string; valor: number }[]>([]);

  quantidadeCarrinho = computed(() => this.carrinho().length);

  totalCarrinho = computed(() => { return this.carrinho().reduce((total, item) => total + item.valor, 0) });

  adicionarAoCarrinho(produto: { nome: string; valor: number }) {
    this.carrinho.update(listaAtual => [...listaAtual, produto]);
  }
}
