import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'pedido', loadChildren: () => import('../../pages/pedido/pedido.module').then(m => m.PedidoPageModule) },
      { path: '', redirectTo: '/tabs/pedido', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/tabs/pedido', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
