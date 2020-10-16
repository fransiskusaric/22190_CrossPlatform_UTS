import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'create-admin',
    loadChildren: () => import('./create-admin/create-admin.module').then( m => m.CreateAdminPageModule)
  },
  {
    path: 'edit-admin',
    loadChildren: () => import('./edit-admin/edit-admin.module').then( m => m.EditAdminPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
