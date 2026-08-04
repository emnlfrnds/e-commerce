//* Código Final LazyLoading e LoadComponent

import { Routes } from "@angular/router";
import { authGuard } from "./core/auth.guard";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'produtos',
    loadComponent: () =>
      import('./features/produtos/lista-produtos/lista-produtos.component').then(m => m.ListaProdutos)
  },
  {
    path: 'carrinho',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/carrinho/carrinho/carrinho.component').then(m => m.Carrinho)
  },
  {
    path:'**',
    redirectTo: '',
  }
];
