import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  imports: [],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto
{

  produto = "Monitor";
  valor = 900;
  mostrarProduto = true;
  mostrarValor = true;

}
