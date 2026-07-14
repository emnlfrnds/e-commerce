import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meuPipe',
})

export class MeuPipePipe implements PipeTransform {
  transform(valor:number): string {
    return 'R$ '+valor.toFixed(2);
  }
}
