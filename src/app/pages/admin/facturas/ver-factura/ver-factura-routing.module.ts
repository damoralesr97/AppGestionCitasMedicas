import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerFacturaPage } from './ver-factura.page';

const routes: Routes = [
  {
    path: '',
    component: VerFacturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerFacturaPageRoutingModule {}
