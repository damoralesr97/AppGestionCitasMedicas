import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearConsultaMedicoPageRoutingModule } from './crear-consulta-medico-routing.module';

import { CrearConsultaMedicoPage } from './crear-consulta-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearConsultaMedicoPageRoutingModule
  ],
  declarations: [CrearConsultaMedicoPage]
})
export class CrearConsultaMedicoPageModule {}
