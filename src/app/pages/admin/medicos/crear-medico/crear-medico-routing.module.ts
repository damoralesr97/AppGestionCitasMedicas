import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearMedicoPage } from './crear-medico.page';

const routes: Routes = [
  {
    path: '',
    component: CrearMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearMedicoPageRoutingModule {}
