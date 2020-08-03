import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearConsultaMedicoPage } from './crear-consulta-medico.page';

const routes: Routes = [
  {
    path: '',
    component: CrearConsultaMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearConsultaMedicoPageRoutingModule {}
