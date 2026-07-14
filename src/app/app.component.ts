import { Component, signal } from '@angular/core';
import { Produto } from './components/produto/produto.component';

@Component({
  selector: 'app-root',
  imports: [Produto],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
