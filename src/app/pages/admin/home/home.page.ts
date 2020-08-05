import { Admin } from './../../../shared/models/admin';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from '../../../components/popover-menu/popover-menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  admin: any = {
    id: '',
    data: {} as Admin
  };

  constructor( private popoverCtrl: PopoverController, private authSrv: AuthService) { }

  async ngOnInit() {
    (await this.authSrv.getUser()).subscribe(resp => {
      this.authSrv.getAdmin(resp.uid).subscribe((res) => {
        if (res.payload.data() != null){
          this.admin.id = res.payload.id;
          this.admin.data = res.payload.data();
        } else {
          this.admin.data = {} as Admin;
        }
      });
    });
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
