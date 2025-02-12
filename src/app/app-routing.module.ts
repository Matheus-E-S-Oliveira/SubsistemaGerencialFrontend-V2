import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./features/clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path: 'fazendas',
    loadChildren: () => import('./features/fazendas/fazendas.module').then(m => m.FazendasModule)
  },
  {
    path: 'contratos',
    loadChildren: () => import('./features/clientes-contratos/clientes-contratos.module').then(m => m.ClientesContratosModule)
  },
  {
    path: 'boletos',
    loadChildren: () => import('./features/boletos/boletos.module').then(m => m.BoletosModule)
  },
  {
    path: 'licencas',
    loadChildren: () => import('./features/licencas/licencas.module').then(m => m.LicencasModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
