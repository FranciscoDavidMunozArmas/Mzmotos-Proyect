import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { ManagerComponent } from './components/manager/manager.component';
import { SalesmanComponent } from './components/salesman/salesman.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { ClientsComponent } from './components/clients/clients.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sales',
    component: SalesmanComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'agenda',
        component: AgendaComponent
      },
      {
        path: 'catalogo',
        component: CatalogueComponent
      },
      {
        path: 'clientes',
        component: ClientsComponent
      },
      {
        path: '',
        redirectTo: 'agenda',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'warehouse',
    component: WarehouseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manager',
    component: ManagerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
