import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerConsultaPage } from './ver-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: VerConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerConsultaPageRoutingModule {}
