import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitasMedicoPage } from './citas-medico.page';

const routes: Routes = [
  {
    path: '',
    component: CitasMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasMedicoPageRoutingModule {}
