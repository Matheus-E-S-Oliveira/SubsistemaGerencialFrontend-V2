import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullEmptyCheck',
  standalone: false
})
export class NullEmptyCheckPipe implements PipeTransform {
  transform(value: any, defaultValue: string = 'Não informado'): string {
    return value === null || value === undefined || value === '' ? defaultValue : value;
  }
}
