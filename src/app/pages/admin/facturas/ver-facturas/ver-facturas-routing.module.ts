import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerFacturasPage } from './ver-facturas.page';

const routes: Routes = [
  {
    path: '',
    component: VerFacturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerFacturasPageRoutingModule {}
