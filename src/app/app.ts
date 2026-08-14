import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from './shared/layout/header/header';
import { login, logout, usuarioLogado } from './core/auth';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  usuarioLogado = usuarioLogado;
  login = login;
  logout = logout;
}
