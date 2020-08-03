import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitasMedicoPorAtenderPageRoutingModule } from './citas-medico-por-atender-routing.module';

import { CitasMedicoPorAtenderPage } from './citas-medico-por-atender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitasMedicoPorAtenderPageRoutingModule
  ],
  declarations: [CitasMedicoPorAtenderPage]
})
export class CitasMedicoPorAtenderPageModule {}
