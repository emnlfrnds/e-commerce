import { Component, signal } from '@angular/core';
import { Produto } from './components/produto/produto.component';

@Component({
  selector: 'app-root',
  imports: [Produto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
