import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerPacientesPageRoutingModule } from './ver-pacientes-routing.module';

import { VerPacientesPage } from './ver-pacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerPacientesPageRoutingModule
  ],
  declarations: [VerPacientesPage]
})
export class VerPacientesPageModule {}
