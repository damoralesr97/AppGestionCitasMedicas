import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarCitaPage } from './editar-cita.page';

const routes: Routes = [
  {
    path: '',
    component: EditarCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarCitaPageRoutingModule {}
