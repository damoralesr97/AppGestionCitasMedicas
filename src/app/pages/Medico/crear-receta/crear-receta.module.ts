import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearRecetaPageRoutingModule } from './crear-receta-routing.module';

import { CrearRecetaPage } from './crear-receta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearRecetaPageRoutingModule
  ],
  declarations: [CrearRecetaPage]
})
export class CrearRecetaPageModule {}
