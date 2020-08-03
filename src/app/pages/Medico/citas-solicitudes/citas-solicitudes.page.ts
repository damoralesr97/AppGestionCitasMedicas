import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { AlertController } from '@ionic/angular';
import { UserC } from './../../../shared/models/user.class';
import { CitaC } from './../../../shared/models/cita.class';
import { MedicoService } from '../../../shared/services/medico.service';

@Component({
  selector: 'app-citas-solicitudes',
  templateUrl: './citas-solicitudes.page.html',
  styleUrls: ['./citas-solicitudes.page.scss'],
})
export class CitasSolicitudesPage implements OnInit {

  citas: Observable<any[]>;
  usuario: Observable<any>;
  uid: string;

  constructor(private medicoService: MedicoService, public router: Router, public alertController: AlertController) { }

  ngOnInit() {
    
    this.citas=this.medicoService.getCitasPendientes();
  }

  trackByFn(index, obj) {
    
    //this.usuario= this.medicoService.getUsuarioById(obj.pacienteUid);
    return obj.uid;
    
  }


  approbeCita(cita:CitaC)
  {
    cita.estado="Por atender";
    this.medicoService.saveCita(cita);
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Hecho',
      message: 'Solicitud Aprobada',
      buttons: ['OK']
    });

    await alert.present();
  }

}
