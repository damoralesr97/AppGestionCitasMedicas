import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Paciente } from 'src/app/shared/models/paciente';
import { PacienteService } from '../../../shared/services/paciente.service';
import { AuthService } from '../../../shared/services/auth.service';
import { PopoverMenuComponent } from '../../../components/popover-menu/popover-menu.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  paciente: any = {
    id: '',
    data: {} as Paciente
  };

  // tslint:disable-next-line: max-line-length
  constructor(private afAuth: AngularFireAuth, private router: Router, private pacienteSrv: PacienteService, private authSrv: AuthService, private popoverCtrl: PopoverController) { }

  async ngOnInit() {
    (await this.authSrv.getUser()).subscribe(resp => {
      this.pacienteSrv.getPaciente(resp.uid).subscribe((res) => {
        if (res.payload.data() != null){
          this.paciente.id = res.payload.id;
          this.paciente.data = res.payload.data();
        } else {
          this.paciente.data = {} as Paciente;
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
