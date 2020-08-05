import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerFacturaPageRoutingModule } from './ver-factura-routing.module';

import { VerFacturaPage } from './ver-factura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerFacturaPageRoutingModule
  ],
  declarations: [VerFacturaPage]
})
export class VerFacturaPageModule {}
