import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitasSolicitudesPage } from './citas-solicitudes.page';

const routes: Routes = [
  {
    path: '',
    component: CitasSolicitudesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasSolicitudesPageRoutingModule {}
