import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'currencyNumber',
  standalone: false
})
export class CurrencyNumberPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) {}

  transform(value: any, currencyCode: string = 'BRL', display: 'code' | 'symbol' = 'symbol'): string | null {
    // Garantir que o valor é um número válido, senão retorna 0
    const numericValue = isNaN(Number(value)) ? 0 : Number(value);

    // Usar o CurrencyPipe para formatar o valor como moeda
    return this.currencyPipe.transform(numericValue, currencyCode, display);
  }
}
