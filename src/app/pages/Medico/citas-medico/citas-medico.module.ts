import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitasMedicoPageRoutingModule } from './citas-medico-routing.module';

import { CitasMedicoPage } from './citas-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitasMedicoPageRoutingModule
  ],
  declarations: [CitasMedicoPage]
})
export class CitasMedicoPageModule {}
