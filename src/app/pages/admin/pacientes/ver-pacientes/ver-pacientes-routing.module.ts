import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerPacientesPage } from './ver-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: VerPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerPacientesPageRoutingModule {}
