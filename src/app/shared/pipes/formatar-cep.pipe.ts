import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarCep',
  standalone: false
})
export class FormatacaoCepPipe implements PipeTransform {
  transform(cep: string, vazio: string = ''): string {
    if (cep === null) {
      return vazio;
    }
    if (cep.length === 8) {
      return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
    }
    return cep;
  }
}
