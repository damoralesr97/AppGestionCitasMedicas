import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearPacientePage } from './crear-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearPacientePageRoutingModule {}
