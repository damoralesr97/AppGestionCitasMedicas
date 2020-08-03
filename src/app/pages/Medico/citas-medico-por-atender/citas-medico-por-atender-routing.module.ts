import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitasMedicoPorAtenderPage } from './citas-medico-por-atender.page';

const routes: Routes = [
  {
    path: '',
    component: CitasMedicoPorAtenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasMedicoPorAtenderPageRoutingModule {}
