import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerFacturaCitaPage } from './ver-factura-cita.page';

const routes: Routes = [
  {
    path: '',
    component: VerFacturaCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerFacturaCitaPageRoutingModule {}
