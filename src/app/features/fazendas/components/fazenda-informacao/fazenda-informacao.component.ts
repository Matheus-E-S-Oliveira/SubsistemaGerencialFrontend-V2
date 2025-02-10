import { Component, OnInit } from '@angular/core';
import { FazendaComEnderecoDto } from '../../../../core/apis/models/dto-models/dto-models.api.service';
import { FazendaApiService } from '../../../../core/apis/endpoints/fazendas/fazenda.api.service';
import { BaseContext } from '../../../../shared/models/base-context.model';
import { GridConfig } from '../../../../shared/models/grid-config.model';
import { labelPipeData, labelPipeDataFazenda } from '../../../../shared/models/dtos-models/dtos-models';
import { take } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-fazenda-informacao',
  standalone: false,
  templateUrl: './fazenda-informacao.component.html',
  styleUrl: './fazenda-informacao.component.scss'
})
export class FazendaInformacaoComponent implements OnInit {

  constructor(private fazendaApiService: FazendaApiService, private baseContext: BaseContext) {}
  
  public Grid = GridConfig.defaultGrid<FazendaComEnderecoDto>();
  id!: string;
  camposEndereco = labelPipeData;
  camposFazenda = labelPipeDataFazenda;
  ngOnInit(): void {
    this.id = this.baseContext.GetRouteId();
    this.getClienteInformacao(this.Grid.PageEvent)
  }

  getClienteInformacao(event: PageEvent){
    this.Grid.PageEvent = event;
    this.fazendaApiService.getFazendaById(this.id, event.pageIndex + 1, event.pageSize)
      .pipe(take(1))
      .subscribe((response) => {
        this.Grid.PaginationResult = response
      })
  }
}
