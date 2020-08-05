import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from '../../../components/popover-menu/popover-menu.component';
import { Medico } from '../../../shared/models/medico';
import { AuthService } from '../../../shared/services/auth.service';
import { MedicoService } from '../../../shared/services/medico.service';

@Component({
  selector: 'app-inicio-medico',
  templateUrl: './inicio-medico.page.html',
  styleUrls: ['./inicio-medico.page.scss'],
})
export class InicioMedicoPage implements OnInit {
  medico: any = {
    id: '',
    data: {} as Medico
  };

  constructor(private popoverCtrl: PopoverController, private authSrv: AuthService, private medicoSrv: MedicoService) { }

  async ngOnInit() {
    (await this.authSrv.getUser()).subscribe(resp => {
      this.medicoSrv.getMedico(resp.uid).subscribe((res) => {
        if (res.payload.data() != null){
          this.medico.id = res.payload.id;
          this.medico.data = res.payload.data();
        } else {
          this.medico.data = {} as Medico;
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
