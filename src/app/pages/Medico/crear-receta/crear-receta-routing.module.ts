import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearRecetaPage } from './crear-receta.page';

const routes: Routes = [
  {
    path: '',
    component: CrearRecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearRecetaPageRoutingModule {}
