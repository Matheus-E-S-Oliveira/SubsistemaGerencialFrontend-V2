import { Component, OnInit } from '@angular/core';
import { ClienteApiService } from '../../../../core/apis/endpoints/clientes/cliente.api.service';
import { GridConfig } from '../../../../shared/models/grid-config.model';
import { ClienteComEnderecoDto } from '../../../../core/apis/models/dto-models/dto-models.api.service';
import { BaseContext } from '../../../../shared/models/base-context.model';
import { PageEvent } from '@angular/material/paginator';
import { take } from 'rxjs';
import { labelPipeData, labelPipeDataFazenda } from '../../../../shared/models/dtos-models/dtos-models';

@Component({
  selector: 'app-cliente-informacao',
  standalone: false,
  
  templateUrl: './cliente-informacao.component.html',
  styleUrl: './cliente-informacao.component.scss'
})
export class ClienteInformacaoComponent implements OnInit{

  constructor(private clienteApiService: ClienteApiService, private baseContext: BaseContext) {}
  public Grid = GridConfig.defaultGrid<ClienteComEnderecoDto>();
  id!: string;
  camposEndereco = labelPipeData;
  camposFazenda = labelPipeDataFazenda;
  ngOnInit(): void {
    this.id = this.baseContext.GetRouteId();
    this.getClienteInformacao(this.Grid.PageEvent)
  }

  getClienteInformacao(event: PageEvent){
    this.Grid.PageEvent = event;
    this.clienteApiService.getClienteById(this.id, event.pageIndex + 1, event.pageSize)
      .pipe(take(1))
      .subscribe((response) => {
        this.Grid.PaginationResult = response
      })
  }

}
