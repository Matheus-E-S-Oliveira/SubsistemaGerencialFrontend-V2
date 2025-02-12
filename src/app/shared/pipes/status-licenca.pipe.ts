import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusLicenca',
  standalone: false
})
export class StatusLicencaPipe implements PipeTransform {

  transform(value: number): string {
    switch(value) {
      case 0:
        return 'Indefinido';
      case 1:
        return 'Ativa';
      case 2:
        return 'Expirado';
      case 3:
        return 'Suspenso';
      default:
        return 'Desconhecido';
    }
  }

}
