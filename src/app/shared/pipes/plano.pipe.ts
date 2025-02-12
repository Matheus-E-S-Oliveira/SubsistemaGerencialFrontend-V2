import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plano',
  standalone: false
})
export class PlanoPipe implements PipeTransform {

  transform(value: number): string {
    switch(value) {
      case 0:
        return 'Indefinido';
      case 1:
        return 'Mensal';
      case 2:
        return 'Anual';
      case 3:
        return 'Gratuito';
      case 4:
        return 'Teste';
      default:
        return 'Desconhecido';
    }
  }

}
