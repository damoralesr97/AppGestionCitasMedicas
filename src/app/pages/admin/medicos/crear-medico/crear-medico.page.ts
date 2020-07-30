import { Component, OnInit } from '@angular/core';
import { Medico } from '../../../../shared/models/medico';
import { MedicoService } from '../../../../shared/services/medico.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crear-medico',
  templateUrl: './crear-medico.page.html',
  styleUrls: ['./crear-medico.page.scss'],
})
export class CrearMedicoPage implements OnInit {
  medico: Medico = new Medico();

  constructor(private medicoSrv: MedicoService, private alertController: AlertController) { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    this.medicoSrv.onRegister(this.medico);
    this.presentAlert('Médico registrado exitosamente!');
  }

  // Mostrar alertas
  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      subHeader: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

}
