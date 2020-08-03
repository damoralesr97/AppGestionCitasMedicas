import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioMedicoPageRoutingModule } from './inicio-medico-routing.module';

import { InicioMedicoPage } from './inicio-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioMedicoPageRoutingModule
  ],
  declarations: [InicioMedicoPage]
})
export class InicioMedicoPageModule {}
