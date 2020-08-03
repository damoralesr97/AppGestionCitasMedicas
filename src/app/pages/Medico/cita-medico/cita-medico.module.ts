import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitaMedicoPageRoutingModule } from './cita-medico-routing.module';

import { CitaMedicoPage } from './cita-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitaMedicoPageRoutingModule
  ],
  declarations: [CitaMedicoPage]
})
export class CitaMedicoPageModule {}
