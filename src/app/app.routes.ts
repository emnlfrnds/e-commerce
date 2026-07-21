// import { Routes } from '@angular/router';
// import { Home } from './pages/home/home';
// import { ListaProdutos } from './features/produtos/lista-produtos/lista-produtos.component';
// import { Carrinho } from './features/carrinho/carrinho/carrinho';

// export const routes: Routes = [
//   {
//     path: '',
//     component: Home,
//   },
//   {
//     path: 'produtos',
//     component: ListaProdutos,
//   },
//   {
//     path: 'carrinho',
//     component: Carrinho,
//   }
// ];

//* Código Final LazyLoading e LoadComponent

import { Routes } from "@angular/router";

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
    loadComponent: () =>
      import('./features/carrinho/carrinho/carrinho.component').then(m => m.Carrinho)
  },
  {
    path:'**',
    redirectTo: '',
  }
];
