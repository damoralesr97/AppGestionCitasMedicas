import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerRecetaPageRoutingModule } from './ver-receta-routing.module';

import { VerRecetaPage } from './ver-receta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerRecetaPageRoutingModule
  ],
  declarations: [VerRecetaPage]
})
export class VerRecetaPageModule {}
