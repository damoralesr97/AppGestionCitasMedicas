import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerHistorialesPageRoutingModule } from './ver-historiales-routing.module';

import { VerHistorialesPage } from './ver-historiales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerHistorialesPageRoutingModule
  ],
  declarations: [VerHistorialesPage]
})
export class VerHistorialesPageModule {}
