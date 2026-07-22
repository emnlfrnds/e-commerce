import { signal } from "@angular/core";

export const usuarioLogado = signal (false);

//* Permissão de acesso às rotas

export function login() {
  usuarioLogado.set(true);
}

export function logout() {
  usuarioLogado.set(false);
}
