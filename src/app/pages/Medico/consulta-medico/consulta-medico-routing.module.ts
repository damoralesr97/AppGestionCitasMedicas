import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaMedicoPage } from './consulta-medico.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaMedicoPageRoutingModule {}
