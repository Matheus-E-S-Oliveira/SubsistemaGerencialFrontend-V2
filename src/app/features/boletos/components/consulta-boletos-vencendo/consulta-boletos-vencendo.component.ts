import { Component } from '@angular/core';
import { FormConsultarBoletosVencendo } from './consulta-boletos-vencendo.viewmodel';
import { GridConfig } from '../../../../shared/models/grid-config.model';
import { BoletoDto } from '../../../../core/apis/models/dto-models/dto-models.api.service';
import { ConsultaBoletosVencendoContext } from './consulta-boletos-vencendo.context';
import { BoletoApiService } from '../../../../core/apis/endpoints/boletos/boleto.api.service';
import { debounceTime, map, take } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-consulta-boletos-vencendo',
  standalone: false,
  templateUrl: './consulta-boletos-vencendo.component.html',
  styleUrl: './consulta-boletos-vencendo.component.scss',
  providers: [ConsultaBoletosVencendoContext]
})
export class ConsultaBoletosVencendoComponent {
  constructor(public context: ConsultaBoletosVencendoContext,
    private boletoApiService: BoletoApiService
  ) { }
  displayedColumns: string[] = ['nome',
    'cpf',
    'nossoNumero',
    'seuNumero',
    'dataEntrada',
    'dataVencimento',
    'dataLimitePagamento',
    'valorMora',
    'valorDesconto',
    'valorAcrescimos',
    'valor',
    'valorCobrado',
    'statusPagamento'];
  public Grid = GridConfig.defaultGrid<BoletoDto>();

  ngOnInit(): void {
    this.getBoleto(this.Grid.PageEvent);
    this.context.InitForm(new FormConsultarBoletosVencendo())

    this.context.formConsulta.valueChanges.pipe(
      debounceTime(1500),
      map(formValue => {
        if (formValue.cpf && formValue !== null) {
          formValue.cpf = this.removeCpfMask(formValue.cpf);
        }
        return { ...formValue };
      })
    )
      .subscribe(() => {
        this.getBoleto({
          ...this.Grid.PageEvent,
          ...this.context.formConsulta.value
        });
      });
  }

  getBoleto(event: PageEvent) {
    this.Grid.PageEvent = event
    this.boletoApiService.getBoletoVencendo(event.pageIndex + 1, event.pageSize, this.context.formConsulta.value)
      .pipe(take(1))
      .subscribe((response) => {
        this.Grid.PaginationResult = response
      })
  }

  removeCpfMask(cpf: string): string {
    return cpf ? cpf.replace(/\D/g, '') : '';
  }
}
