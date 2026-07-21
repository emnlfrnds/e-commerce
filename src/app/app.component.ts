import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, UpperCasePipe],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('e-commerce');
  loja = "LOVI - Sua Loja Virtual!";
}
