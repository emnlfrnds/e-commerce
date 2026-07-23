import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

type ProdutoApi = {
  title: string;
  price: number;
};

type Produto = {
  nome: string;
  valor: number;
};

@Injectable({providedIn: 'root'})

export class produtosService {
  private http = inject(HttpClient);
  private API  = 'https://fakestoreapi.com/products';

  buscarProdutos() {
    return this.http.get<ProdutoApi []>(this.API);
  }

  transformarProdutos(dados: ProdutoApi[]):Produto[] {
    return dados.map((p) => ({
      nome: p.title,
      valor: p.price,
    }));
  }
}
