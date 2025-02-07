import { Component, OnInit } from '@angular/core';

import { PlanoService } from './shared/services/plano.service';
import { ReceitaService } from './shared/services/receita.service';
import { LicencaService } from './shared/services/licenca.service';
import { DadosGeraisService } from './shared/services/dados-gerais.service';
import { FormaPagamentoService } from './shared/services/forma-pagamentos.service';
import { CompradosAnualService } from './shared/services/comprados-anual.service';
import { ClienteService } from './shared/services/cliente.service';
import { ContratoService } from './shared/services/contrato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'SubsistemaGerencialFrontend';
  constructor(private receitaService: ReceitaService, private licencaService: LicencaService,
    private formaPagamentosService: FormaPagamentoService, private planoService: PlanoService,
    private compradosAnualService: CompradosAnualService, private dadosGeraisSerice: DadosGeraisService,
    private clienteService: ClienteService, private contartoService: ContratoService
  ) { }

  ngOnInit(): void {
    this.planoService.loadLicencaData();
    this.clienteService.loadLicencaData();
    this.receitaService.loadLicencaData();
    this.licencaService.loadLicencaData();
    this.contartoService.loadLicencaData();
    this.dadosGeraisSerice.loadLicencaData();
    this.compradosAnualService.loadLicencaData();
    this.formaPagamentosService.loadLicencaData();
  }


}
