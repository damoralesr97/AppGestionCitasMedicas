import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioMedicoPage } from './inicio-medico.page';

const routes: Routes = [
  {
    path: '',
    component: InicioMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioMedicoPageRoutingModule {}
