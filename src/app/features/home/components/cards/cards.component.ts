import { Component } from '@angular/core';
import { LicencaService } from '../../../../shared/services/licenca.service';
import { ReceitaService } from '../../../../shared/services/receita.service';

@Component({
  selector: 'app-cards',
  standalone: false,

  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  ativos!: number;
  expirados!: number;
  total!: any;
  receitaUltimoMes!: number | null;
  dividaUltimoMes!: number | null;
  dividaPenultimoMes!: number | null;
  constructor(private licencaService: LicencaService, private receitaService: ReceitaService) { }

  ngOnInit() {
    this.licencaService.licencaData$.subscribe((response) => {
      if (response) {
        this.ativos = response.licencaAtiva;
        this.expirados = response.licencaExpirado
        this.total = Object.values(response).reduce((acc: any, valor) => acc + valor, 0);
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
