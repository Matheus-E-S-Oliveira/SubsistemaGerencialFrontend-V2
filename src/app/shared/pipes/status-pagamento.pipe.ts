import { Pipe, PipeTransform } from '@angular/core';
import { StatusPagamento } from '../constants/status-pagamento';
 
@Pipe({
  name: 'statusPagamento',
  standalone: false
})
export class StatusPagamentoPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case StatusPagamento.Indefinido:
        return 'Indefinido';
      case StatusPagamento.Pago:
        return 'Pago';
      case StatusPagamento.Vencido:
        return 'Vencido';
      case StatusPagamento.PagamentoAtrasado:
        return 'Pagamento Atrasado';
      case StatusPagamento.Pendente:
        return 'Pendente';
      default:
        return 'Desconhecido';  // Caso o valor seja inválido
    }
  }
}
