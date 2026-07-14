import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valorFormatado',
})

export class valorFormatadoPipe implements PipeTransform {
  transform(v:number): string {
    return 'R$ '+v.toFixed(2);
  }
}
