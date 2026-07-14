import { Component, Input, Output } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { valorFormatadoPipe } from '../../pipes/pipe';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, valorFormatadoPipe],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css',
})

export class Produto
{
  @Input() nome: string = '';
  @Input() valor: number = 0;
}
