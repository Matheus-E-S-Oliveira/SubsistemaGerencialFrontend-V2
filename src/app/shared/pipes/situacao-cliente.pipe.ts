import { Pipe, PipeTransform } from '@angular/core';
import { SituacaoCliente } from '../constants/situacao-cliente';


@Pipe({
  name: 'situacaoCliente',
  standalone: false
})
export class SituacaoClientePipe implements PipeTransform {

  transform(situacao: number): string {
    return SituacaoCliente[situacao] || SituacaoCliente[0];
  }

}
