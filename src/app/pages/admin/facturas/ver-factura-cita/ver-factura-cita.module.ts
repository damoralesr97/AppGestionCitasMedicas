import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerFacturaCitaPageRoutingModule } from './ver-factura-cita-routing.module';

import { VerFacturaCitaPage } from './ver-factura-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerFacturaCitaPageRoutingModule
  ],
  declarations: [VerFacturaCitaPage]
})
export class VerFacturaCitaPageModule {}
