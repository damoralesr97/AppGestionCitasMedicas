import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCitaMedicoPage } from './crear-cita-medico.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCitaMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCitaMedicoPageRoutingModule {}
