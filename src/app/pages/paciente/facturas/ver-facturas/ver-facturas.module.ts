import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerFacturasPageRoutingModule } from './ver-facturas-routing.module';

import { VerFacturasPage } from './ver-facturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerFacturasPageRoutingModule
  ],
  declarations: [VerFacturasPage]
})
export class VerFacturasPageModule {}
