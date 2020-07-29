import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCitaPage } from './crear-cita.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCitaPageRoutingModule {}
