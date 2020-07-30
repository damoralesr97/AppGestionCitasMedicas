import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearMedicoPageRoutingModule } from './crear-medico-routing.module';

import { CrearMedicoPage } from './crear-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearMedicoPageRoutingModule
  ],
  declarations: [CrearMedicoPage]
})
export class CrearMedicoPageModule {}
