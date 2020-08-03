import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitasSolicitudesPageRoutingModule } from './citas-solicitudes-routing.module';

import { CitasSolicitudesPage } from './citas-solicitudes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitasSolicitudesPageRoutingModule
  ],
  declarations: [CitasSolicitudesPage]
})
export class CitasSolicitudesPageModule {}
