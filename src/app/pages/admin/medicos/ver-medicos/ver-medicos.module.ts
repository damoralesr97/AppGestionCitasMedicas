import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerMedicosPageRoutingModule } from './ver-medicos-routing.module';

import { VerMedicosPage } from './ver-medicos.page';
import { PipesModule } from '../../../../shared/pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    VerMedicosPageRoutingModule
  ],
  declarations: [VerMedicosPage]
})
export class VerMedicosPageModule {}
