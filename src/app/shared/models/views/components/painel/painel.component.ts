import { Component, OnInit } from '@angular/core';
import { FormaPagamentoService } from '../../../../services/forma-pagamentos.service';
import { PlanoService } from '../../../../services/plano.service';

@Component({
  selector: 'app-painel',
  standalone: false,
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.scss'
})
export class PainelComponent implements OnInit {

  dados: { tipo: string, valor: number }[] = [];
  planos: { tipo: string, valor: number }[] = [];

  constructor(private formaPagamentoService: FormaPagamentoService, private planoService: PlanoService) { }

  ngOnInit(): void {
    this.formaPagamentoService.FpData$.subscribe((response) => {
      if (response) {
        this.atualizarDados(response);
      }
    });
    this.planoService.PlanoData$.subscribe((response) => {
      if (response) {
        this.atualizarDadosPlano(response)
      }
    })
  }

  atualizarDados(response: any) {
    this.dados = [
      { tipo: 'Boleto', valor: response.totalFormaPagamentoBoleto },
      { tipo: 'Cartão de Crédito', valor: response.totalFormaPagamentoCartaoCredito },
      { tipo: 'Dinheiro', valor: response.totalFormaPagamentoDinheiro },
      { tipo: 'Indefinido', valor: response.totalFormaPagamentoIndefinido },
      { tipo: 'Pix', valor: response.totalFormaPagamentoPix }
    ].sort((a, b) => b.valor - a.valor);
  }
  atualizarDadosPlano(response: any) {
    this.planos = [
      { tipo: 'Anual', valor: response.totalPlanoAnual },
      { tipo: 'Gratuito', valor: response.totalPlanoGratuito },
      { tipo: 'Indefinido', valor: response.totalPlanoIndefinido },
      { tipo: 'Mensal', valor: response.totalPlanoMensal },
      { tipo: 'Teste', valor: response.totalPlanoTeste }
    ].sort((a, b) => b.valor - a.valor);
  }


}
