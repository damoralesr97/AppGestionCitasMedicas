import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerMedicosPage } from './ver-medicos.page';

const routes: Routes = [
  {
    path: '',
    component: VerMedicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerMedicosPageRoutingModule {}
