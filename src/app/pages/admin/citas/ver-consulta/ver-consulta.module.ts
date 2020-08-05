import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerConsultaPageRoutingModule } from './ver-consulta-routing.module';

import { VerConsultaPage } from './ver-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerConsultaPageRoutingModule
  ],
  declarations: [VerConsultaPage]
})
export class VerConsultaPageModule {}
