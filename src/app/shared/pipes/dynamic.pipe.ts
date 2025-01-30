import { Pipe, PipeTransform } from '@angular/core';
import { CpfFormatPipe } from './cpf-format.pipe'; // Importe seus pipes personalizados
import { NullEmptyCheckPipe } from './null-empty-check.pipe';
import { SituacaoClientePipe } from './situacao-cliente.pipe';
import { AssinadoPeloPortalPipe } from './assinado-pelo-portal.pipe';
import { SituacaoContratoPipes } from './situacao-contrato.pipe';
import { FormatacaoCepPipe } from './formatar-cep.pipe';


@Pipe({
  name: 'dynamicPipe',
  standalone: false
})
export class DynamicPipe implements PipeTransform {
  constructor(
    private cpfFormatPipe: CpfFormatPipe,
    private nullEmptyCheckPipe: NullEmptyCheckPipe,
    private situacaoClientePipe: SituacaoClientePipe,
    private assinadoPeloPortalPipe: AssinadoPeloPortalPipe,
    private situacaoContratoPipe: SituacaoContratoPipes,
    private formatacaoCepPipe: FormatacaoCepPipe
  ) {}

  transform(value: any, pipes?: string[]): any {
    if (!pipes || !value) {
      return value;
    }

    return pipes.reduce((acc, pipe) => {
      switch (pipe) {
        case 'cpfFormat':
          return this.cpfFormatPipe.transform(acc);
        case 'nullEmptyCheck':
          return this.nullEmptyCheckPipe.transform(acc);
        case 'situacaoCliente':
          return this.situacaoClientePipe.transform(acc);
        case 'assinadoPeloPortal':
          return this.assinadoPeloPortalPipe.transform(acc);
        case 'situacaoContrato':
          return this.situacaoContratoPipe.transform(acc);
        case 'formatarCep':
          return this.formatacaoCepPipe.transform(acc);
        default:
          return acc;
      }
    }, value);
  }
}
