import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerMedicosPageRoutingModule } from './ver-medicos-routing.module';

import { VerMedicosPage } from './ver-medicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMedicosPageRoutingModule
  ],
  declarations: [VerMedicosPage]
})
export class VerMedicosPageModule {}
