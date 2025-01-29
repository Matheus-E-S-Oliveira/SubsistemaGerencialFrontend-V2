import { Component, OnInit } from '@angular/core';
import { ConsultaFazendaContext } from './consultar-fazendas.context';
import { FormConsultarFazendas } from './consultar-fazendas.viewmodel';
import { GridConfig } from '../../../../shared/models/grid-config.model';
import { FazendaDto } from '../../../../core/apis/models/dto-models/dto-models.api.service';
import { PageEvent } from '@angular/material/paginator';
import { FazendaApiService } from '../../../../core/apis/endpoints/fazendas/fazenda.api.service';
import { debounceTime, take } from 'rxjs';

@Component({
  selector: 'app-consutar-fazendas',
  standalone: false,

  templateUrl: './consultar-fazendas.component.html',
  styleUrl: './consultar-fazendas.component.scss',
  providers: [ConsultaFazendaContext]
})
export class ConsultarFazendasComponent implements OnInit {

  constructor(public context: ConsultaFazendaContext, private fazendaApiservice: FazendaApiService) { }
  displayedColumns: string[] = ['codigoFazenda','nome', 'dataCriacaoFazenda', 'quantidadeAnimais'];
  public Grid =  GridConfig.defaultGrid<FazendaDto>();

  ngOnInit(): void {
    this.context.InitForm(new FormConsultarFazendas());
    this.getFazendas(this.Grid.PageEvent);

    this.context.formConsulta.valueChanges.pipe(
      debounceTime(1500)
    ).subscribe(() => {
      this.getFazendas({
        ...this.Grid.PageEvent,
        ...this.context.formConsulta.value
      })
    })
  }

  getFazendas(event: PageEvent){
    this.Grid.PageEvent = event;
    this.fazendaApiservice.getFazendas(event.pageIndex + 1, event.pageSize, this.context.formConsulta.value)
    .pipe(take(1))
    .subscribe((response) => {
      this.Grid.PaginationResult = response;
    })
  }

}
