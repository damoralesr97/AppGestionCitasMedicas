import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaMedicoPageRoutingModule } from './consulta-medico-routing.module';

import { ConsultaMedicoPage } from './consulta-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaMedicoPageRoutingModule
  ],
  declarations: [ConsultaMedicoPage]
})
export class ConsultaMedicoPageModule {}
