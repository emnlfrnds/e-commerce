import { Component, signal } from '@angular/core';
// import { Produto } from './features/produtos/produto/produto.component';
// import { ListaProdutos } from './features/produtos/lista-produtos/lista-produtos.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  loja = "LOVI - Sua Loja Virtual!";
}
