import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerRecetaPage } from './ver-receta.page';

const routes: Routes = [
  {
    path: '',
    component: VerRecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerRecetaPageRoutingModule {}
