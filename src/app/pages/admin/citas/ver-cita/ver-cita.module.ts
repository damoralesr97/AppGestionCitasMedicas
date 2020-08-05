import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerCitaPageRoutingModule } from './ver-cita-routing.module';

import { VerCitaPage } from './ver-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerCitaPageRoutingModule
  ],
  declarations: [VerCitaPage]
})
export class VerCitaPageModule {}
