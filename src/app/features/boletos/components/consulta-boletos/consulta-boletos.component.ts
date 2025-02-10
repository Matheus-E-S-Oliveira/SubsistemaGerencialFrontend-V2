import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConsultaBoletosContext } from './consulta-boletos.context';
import { BoletoApiService } from '../../../../core/apis/endpoints/boletos/boleto.api.service';
import { BoletoDto } from '../../../../core/apis/models/dto-models/dto-models.api.service';
import { GridConfig } from '../../../../shared/models/grid-config.model';
import { FormConsultarBoletos } from './consulta-boletos.viewmodel';
import { debounceTime, map, take } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import moment from 'moment';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS } from '../../../../shared/modules/angular-material.module';

@Component({
  selector: 'app-consulta-boletos',
  standalone: false,
  templateUrl: './consulta-boletos.component.html',
  styleUrl: './consulta-boletos.component.scss',
  providers: [ConsultaBoletosContext, provideMomentDateAdapter(MY_FORMATS)],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultaBoletosComponent implements OnInit {

  constructor(public context: ConsultaBoletosContext,
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
    this.context.InitForm(new FormConsultarBoletos())

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
    const formData = this.context.formConsulta.value;
    const formattedData = formData.data ? formData.data.format('MM/YYYY') : null;
    this.boletoApiService.getBoleto(event.pageIndex + 1, event.pageSize, {
      ...formData,
      data: formattedData
    })
      .pipe(take(1))
      .subscribe((response) => {
        this.Grid.PaginationResult = response
      })
  }

  removeCpfMask(cpf: string): string {
    return cpf ? cpf.replace(/\D/g, '') : '';
  }

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.context.formConsulta.controls.data.value ?? moment();
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.context.formConsulta.controls.data.setValue(ctrlValue);
    datepicker.close();
  }
}
