import { Component, signal } from '@angular/core';
import { Produto } from './components/produto/produto.component';
import { ListaProdutos } from './components/lista-produtos/lista-produtos.component';

@Component({
  selector: 'app-root',
  imports: [ListaProdutos],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
