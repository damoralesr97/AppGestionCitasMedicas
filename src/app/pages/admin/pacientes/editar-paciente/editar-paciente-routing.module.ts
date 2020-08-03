import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPacientePage } from './editar-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPacientePageRoutingModule {}
