import { CompradosAnualService } from './../../../../shared/services/comprados-anual.service';
import { Component } from '@angular/core';
import { LicencaService } from '../../../../shared/services/licenca.service';
import { ReceitaService } from '../../../../shared/services/receita.service';
import { DadosGeraisService } from '../../../../shared/services/dados-gerais.service';
import { response } from 'express';
import { ClienteService } from '../../../../shared/services/cliente.service';

@Component({
  selector: 'app-cards',
  standalone: false,

  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  dadosLicenca: any;
  total!: any;
  receitaUltimoMes!: number | null;
  dividaUltimoMes!: number | null;
  dividaPenultimoMes!: number | null;
  compradosEsteAno!: number;
  title = `Licenças Compradas ${new Date().getFullYear()}:`
  dadoGerais: any;
  dadosCliente: any;
  clienteTotal!: number;
  constructor(private licencaService: LicencaService, private receitaService: ReceitaService,
    private compradosAnualService: CompradosAnualService, private dadosGeraisSerive: DadosGeraisService,
    private clienteSerice: ClienteService) { }

  ngOnInit() {
    this.clienteSerice.ClienteData$.subscribe((response) => {
      if(response){
        this.dadosCliente = response;
        this.clienteTotal = [response.clienteAtivos, response.clienteInativos, response.clienteInderteminados].reduce((acc, valor) => acc + valor, 0);
      }
    })
    this.dadosGeraisSerive.DadosGeraisData$.subscribe((response) => {
      if(response){
        this.dadoGerais = response;
      }
    })

    this.licencaService.licencaData$.subscribe((response) => {
      if (response) {
        this.dadosLicenca = response;
        this.total = [response.totalLicencaAtiva, response.totalLicencaExpirado, response.totalLicencaIndefinido,
          response.totalLicencaSuspenco
        ].reduce((acc, valor) => acc + valor, 0);
      }
    });
    this.compradosAnualService.AnualData$.subscribe((response) => {
      if (response && response.licencasPorAno) {
        const anos = Object.keys(response.licencasPorAno).sort(); // Ordena os anos
        const ultimoAno = anos[anos.length - 1]; // Pega o último ano
        const valoresUltimoAno = response.licencasPorAno[ultimoAno]; // Pega os valores desse ano
        
        // Soma os valores dentro do último ano
        this.compradosEsteAno = Object.values(valoresUltimoAno).reduce((acc, valor) => acc + (Number(valor) || 0), 0);
      } else {
        this.compradosEsteAno = 0; // Caso response seja inválido
      }
    });
    this.receitaService.receitaData$.subscribe((response) => {
      if (response) {
        // Converte as chaves para datas reais antes de ordenar
        const sortedEntries = Object.entries(response.valoresAReceberPorMes)
          .map(([key, value]) => {
            const [mes, ano] = key.split('/').map(x => parseInt(x, 10)); // Converte para número
            return { key, value, date: new Date(ano, mes - 1) }; // Cria um objeto Date
          })
          .sort((a, b) => a.date.getTime() - b.date.getTime()); // Ordena pelas datas corretamente

        if (sortedEntries.length > 0) {
          this.dividaUltimoMes = sortedEntries[sortedEntries.length - 1].value; // Último valor (mês mais recente)
        }

        if (sortedEntries.length > 1) {
          this.dividaPenultimoMes = sortedEntries[sortedEntries.length - 2].value; // Penúltimo valor
        } else {
          this.dividaPenultimoMes = null; // Se não houver penúltimo mês
        }

        const aux = Object.entries(response.receitaPorMes)
          .sort(([a], [b]) => (a > b ? 1 : -1))
          .pop();
        this.receitaUltimoMes = aux ? aux[1] : null;
      }
    })
  }
}
