import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerHistorialesPage } from './ver-historiales.page';

const routes: Routes = [
  {
    path: '',
    component: VerHistorialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerHistorialesPageRoutingModule {}
