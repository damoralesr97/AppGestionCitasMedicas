import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverMenuComponent } from './popover-menu/popover-menu.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    PopoverMenuComponent
  ],
  exports: [
    PopoverMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
