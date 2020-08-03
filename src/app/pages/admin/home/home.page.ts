import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from '../../../components/popover-menu/popover-menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async showPop(event){
    const popover = await this.popoverCtrl.create({
      component: PopoverMenuComponent,
      event,
      translucent: true
    });
    await popover.present();
  }

}
