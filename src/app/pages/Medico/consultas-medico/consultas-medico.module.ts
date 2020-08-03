import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultasMedicoPageRoutingModule } from './consultas-medico-routing.module';

import { ConsultasMedicoPage } from './consultas-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultasMedicoPageRoutingModule
  ],
  declarations: [ConsultasMedicoPage]
})
export class ConsultasMedicoPageModule {}
