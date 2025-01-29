import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { GridConfig } from '../../../../shared/models/grid-config.model';

import { ConsultaClienteContext } from './consultar-clientes.context';
import { FormConsultarClientes } from './consultar-clientes.viewmodel';
import { ClienteApiService } from '../../../../core/apis/endpoints/clientes/cliente.api.service';
import { ClienteDto } from '../../../../core/apis/models/dto-models/dto-models.api.service';
import { debounceTime, map, take } from 'rxjs';

@Component({
  selector: 'app-consultar-clientes',
  standalone: false,
  
  templateUrl: './consultar-clientes.component.html',
  styleUrl: './consultar-clientes.component.scss',
  providers: [ConsultaClienteContext]
})
export class ConsultarClientesComponent implements OnInit {

 constructor(public context: ConsultaClienteContext,
  private clienteApiService: ClienteApiService
 ){}
 displayedColumns: string[] = ['nome', 'cpf', 'situacao', 'email', 'telefone', 'acoes'];
 public Grid = GridConfig.defaultGrid<ClienteDto>();
 
 ngOnInit(): void {
    this.context.InitForm(new FormConsultarClientes())
    this.getClientes(this.Grid.PageEvent);

    this.context.formConsulta.valueChanges.pipe(
      debounceTime(1500),
      map(formValue =>{
        if(formValue.cpf && formValue !== null){
          formValue.cpf = this.removeCpfMask(formValue.cpf);
        }
        return {...formValue};
      })
    )
    .subscribe(() => {
      this.getClientes({
        ...this.Grid.PageEvent,
        ...this.context.formConsulta.value
      });
    });
  }

  getClientes(event: PageEvent){
    this.Grid.PageEvent = event
    this.clienteApiService.getClientes(event.pageIndex + 1, event.pageSize, this.context.formConsulta.value)
     .pipe(take(1))
     .subscribe((response) => {
        this.Grid.PaginationResult = response
     })
  }

  removeCpfMask(cpf: string): string {
    return cpf ? cpf.replace(/\D/g, '') : '';
  }
}