import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerCitaPage } from './ver-cita.page';

const routes: Routes = [
  {
    path: '',
    component: VerCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerCitaPageRoutingModule {}
