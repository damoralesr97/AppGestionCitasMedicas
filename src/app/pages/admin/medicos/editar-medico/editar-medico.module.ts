import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarMedicoPageRoutingModule } from './editar-medico-routing.module';

import { EditarMedicoPage } from './editar-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarMedicoPageRoutingModule
  ],
  declarations: [EditarMedicoPage]
})
export class EditarMedicoPageModule {}
