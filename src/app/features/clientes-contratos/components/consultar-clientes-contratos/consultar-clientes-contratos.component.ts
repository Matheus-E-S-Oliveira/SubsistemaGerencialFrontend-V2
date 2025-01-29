import { Component, OnInit } from '@angular/core';
import { ConsultaClienteContratoContext } from './consultar-clientes.context';
import { FormConsultaContrato } from './consultar-clientes.viewmodel';
import { GridConfig } from '../../../../shared/models/grid-config.model';
import { ClienteContratoDto } from '../../../../core/apis/models/dto-models/dto-models.api.service';
import { ClienteContratoApiService } from '../../../../core/apis/endpoints/clientes-contratos/cliente-contrato.api.service';
import { PageEvent } from '@angular/material/paginator';
import { debounceTime, take } from 'rxjs';

@Component({
  selector: 'app-consultar-clientes-contratos',
  standalone: false,
  
  templateUrl: './consultar-clientes-contratos.component.html',
  styleUrl: './consultar-clientes-contratos.component.scss',
  providers: [ConsultaClienteContratoContext]
})
export class ConsultarClientesContratosComponent implements OnInit{

  constructor(public context: ConsultaClienteContratoContext, private clienteContratoApiService: ClienteContratoApiService) {}
  public Grid = GridConfig.defaultGrid<ClienteContratoDto>();
  displayedColumns: string[] = ['assinadoPeloPortal', 'nomeCliente', 'nomeFazenda', 'situacao',
    'dataInicopagamento', 'dataFimTryal', 'codigoContrato', 'codigoObjetoFazenda'
  ];

  ngOnInit(): void {
    this.context.InitForm(new FormConsultaContrato());
    this.getClienteContrato(this.Grid.PageEvent);
    console.log(this.context.formConsulta.controls.situacao.value)

    this.context.formConsulta.valueChanges.pipe(
      debounceTime(1500)
    ).subscribe(() => {
      this.getClienteContrato({
        ...this.Grid.PageEvent,
        ...this.context.formConsulta.value
      })
    })
  }

  getClienteContrato(event: PageEvent){
    this.Grid.PageEvent = event;
    this.clienteContratoApiService.getClientesContarto(event.pageIndex + 1, event.pageSize, this.context.formConsulta.value)
      .pipe(take(1))
      .subscribe((response) => {
        this.Grid.PaginationResult = response; 
      })
  }

}
