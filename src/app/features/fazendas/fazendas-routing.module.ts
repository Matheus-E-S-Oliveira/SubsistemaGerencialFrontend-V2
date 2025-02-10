import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarFazendasComponent } from './components/consultar-fazendas/consultar-fazendas.component';
import { FazendaInformacaoComponent } from './components/fazenda-informacao/fazenda-informacao.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultarFazendasComponent
  },
  {
    path: 'detalhes/:id',
    component:FazendaInformacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FazendasRoutingModule { }
