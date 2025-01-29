import { Pipe, PipeTransform } from '@angular/core';
import { SituacaoContratoPipe } from '../constants/situacao-contrato';

@Pipe({
  name: 'situacaoContrato',
  standalone: false
})
export class SituacaoContratoPipes implements PipeTransform {

  transform(value: number): string {
    return SituacaoContratoPipe[value] || SituacaoContratoPipe[0];
  }
}
