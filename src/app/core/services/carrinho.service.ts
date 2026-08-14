import { Injectable, signal, computed } from "@angular/core";

type ItemCarrinho = {
  nome: string;
  preco: number;
};

@Injectable({ providedIn: 'root' })

export class CarrinhoService {

  // State (global)
  private carrinho = signal<ItemCarrinho[]>([]);

  // Selectors
  itens = computed(() => this.carrinho());
  carrinhoVazio = computed(() => this.carrinho().length === 0);
  quantidade = computed(() => this.carrinho().length);
  total = computed(() =>
    this.carrinho().reduce((total, item) => total + item.preco, 0)
  );

  // Actions
  adicionar(produto: ItemCarrinho) {
    this.carrinho.update(lista => [...lista, produto]);
  }
  limpar() {
    this.carrinho.set([]);
  }
}
