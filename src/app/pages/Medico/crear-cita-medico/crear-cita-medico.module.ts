import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCitaMedicoPageRoutingModule } from './crear-cita-medico-routing.module';

import { CrearCitaMedicoPage } from './crear-cita-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCitaMedicoPageRoutingModule
  ],
  declarations: [CrearCitaMedicoPage]
})
export class CrearCitaMedicoPageModule {}
