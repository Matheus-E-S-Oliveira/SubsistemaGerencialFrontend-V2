import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assinadoPeloPortal',
  standalone: false
})
export class AssinadoPeloPortalPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Sim' : 'Não';
  }
}
