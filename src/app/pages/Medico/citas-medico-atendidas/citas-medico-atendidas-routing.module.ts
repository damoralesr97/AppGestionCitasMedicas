import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitasMedicoAtendidasPage } from './citas-medico-atendidas.page';

const routes: Routes = [
  {
    path: '',
    component: CitasMedicoAtendidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasMedicoAtendidasPageRoutingModule {}
