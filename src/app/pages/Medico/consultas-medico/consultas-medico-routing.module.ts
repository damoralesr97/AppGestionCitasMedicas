import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultasMedicoPage } from './consultas-medico.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultasMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultasMedicoPageRoutingModule {}
