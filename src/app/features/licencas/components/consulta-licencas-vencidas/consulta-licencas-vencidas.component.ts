import { Component } from '@angular/core';
import { LicencaDto } from '../../../../core/apis/models/dto-models/dto-models.api.service';
import { GridConfig } from '../../../../shared/models/grid-config.model';
import { LicencaApiService } from '../../../../core/apis/endpoints/liencas/licenca.api.service';
import { ConsultaLicencasVencidasContext } from './consulta-licencas-vencidas.context';
import { FormConsultaLicencasVencidas } from './consulta-licencas-vencidas.viewmodel';
import { debounceTime, map, take } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-consulta-licencas-vencidas',
  standalone: false,
  templateUrl: './consulta-licencas-vencidas.component.html',
  styleUrl: './consulta-licencas-vencidas.component.scss',
  providers: [ConsultaLicencasVencidasContext]
})
export class ConsultaLicencasVencidasComponent {
  constructor(public context: ConsultaLicencasVencidasContext,
    private licencaApiService: LicencaApiService
  ) { }
  displayedColumns: string[] = [
    'nomeCliente',
    'cpfCliente',
    'dataInico',
    'dataVencimento',
    'reference',
    'plano',
    'statusLicenca',
    'faturaGerada'];
  public Grid = GridConfig.defaultGrid<LicencaDto>();

  ngOnInit(): void {
    this.getLicenca(this.Grid.PageEvent);
    this.context.InitForm(new FormConsultaLicencasVencidas())

    this.context.formConsulta.valueChanges.pipe(
      debounceTime(1500),
      map(formValue => {
        if (formValue.cpfCliente && formValue !== null) {
          formValue.cpfCliente = this.removeCpfMask(formValue.cpfCliente);
        }
        return { ...formValue };
      })
    )
      .subscribe(() => {
        this.getLicenca({
          ...this.Grid.PageEvent,
          ...this.context.formConsulta.value
        });
      });
  }

  getLicenca(event: PageEvent) {
    this.Grid.PageEvent = event
    this.licencaApiService.getLicencaVencidas(event.pageIndex + 1, event.pageSize, this.context.formConsulta.value)
      .pipe(take(1))
      .subscribe((response) => {
        this.Grid.PaginationResult = response
      })
  }

  removeCpfMask(cpf: string): string {
    return cpf ? cpf.replace(/\D/g, '') : '';
  }
}
