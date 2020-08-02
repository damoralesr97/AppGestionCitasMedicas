import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarMedicoPage } from './editar-medico.page';

const routes: Routes = [
  {
    path: '',
    component: EditarMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarMedicoPageRoutingModule {}
