import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarFazendasComponent } from './components/consultar-fazendas/consultar-fazendas.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultarFazendasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FazendasRoutingModule { }
