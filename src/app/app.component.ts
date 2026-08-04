import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { usuarioLogado, login, logout } from './core/auth';
import { MatAnchor } from "@angular/material/button";
import { Header } from './shared/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatAnchor, Header],
  templateUrl: './app.html'
})

export class App {
  protected readonly title = signal('e-commerce');
  usuarioLogado = usuarioLogado;
  login = login;
  logout = logout;
}
