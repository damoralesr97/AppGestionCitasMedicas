import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitasMedicoAtendidasPageRoutingModule } from './citas-medico-atendidas-routing.module';

import { CitasMedicoAtendidasPage } from './citas-medico-atendidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitasMedicoAtendidasPageRoutingModule
  ],
  declarations: [CitasMedicoAtendidasPage]
})
export class CitasMedicoAtendidasPageModule {}
