import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarCitaPageRoutingModule } from './editar-cita-routing.module';

import { EditarCitaPage } from './editar-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarCitaPageRoutingModule
  ],
  declarations: [EditarCitaPage]
})
export class EditarCitaPageModule {}
