import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { LicencaService } from '../../../../shared/services/licenca.service';
import { ReceitaService } from '../../../../shared/services/receita.service';
import { ClienteService } from '../../../../shared/services/cliente.service';

@Component({
  selector: 'app-kpis',
  standalone: false,

  templateUrl: './kpis.component.html',
  styleUrl: './kpis.component.scss'
})
export class KpisComponent {
  dados: any;
  valoresAReceberAcumulado: any;
  lastValue!: number | null;
  receitaAcumulada!: number | null;
  dadosCliente: any;
  constructor(private licencaService: LicencaService, private receitaService: ReceitaService,
    private clienteService: ClienteService
  ) {}

  ngOnInit() {
    this.clienteService.ClienteData$.subscribe((response) => {
      if(response){
        this.dadosCliente = response.clienteAtivos
      }
    })
    this.licencaService.licencaData$.subscribe((response) => {
      if (response) {
        this.dados = response.licencaAtiva
      }
    });
    this.receitaService.receitaData$.subscribe((response) => {
      if(response){
        const lastMonth = Object.entries(response.valoresAReceberAcumulado)
          .sort(([a], [b]) => (a > b ? 1 : -1)) 
          .pop();  
        this.lastValue = lastMonth ? lastMonth[1] : null;

        const aux = Object.entries(response.receitaAcumulada)
          .sort(([a], [b]) => (a > b ? 1 : -1)) 
          .pop();  
        this.receitaAcumulada = aux ? aux[1] : null;
      }
    })
  }
}