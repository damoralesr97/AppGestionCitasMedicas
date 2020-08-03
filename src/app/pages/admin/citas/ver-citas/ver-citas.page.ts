import { LoadingController } from '@ionic/angular';
import { PacienteService } from './../../../../shared/services/paciente.service';
import { MedicoService } from './../../../../shared/services/medico.service';
import { first } from 'rxjs/operators';
import { CitaService } from './../../../../shared/services/cita.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.page.html',
  styleUrls: ['./ver-citas.page.scss'],
})
export class VerCitasPage implements OnInit {

  citas: any[]=[];
  loading: any;

  constructor(private citaService: CitaService,private medicoSrv: MedicoService,private pacienteSrv:PacienteService, private loadingCtrl: LoadingController) { }

  async ngOnInit() {
    this.presentLoading();
    await (await this.citaService.getCitas()).pipe(first()).toPromise().then( resp => {
      resp.forEach((cita) => {
        this.citas.push(cita.payload.doc.data());
      });
    });
    for(let a of this.citas){
      a.medico   = await this.getMedico(a.medicoUid);
      a.paciente = await this.getPaciente(a.pacienteUid);
    }
    this.loading.dismiss();
  }

  async getMedico(uid: string){
    const aux = await (await this.medicoSrv.getMedico2(uid)).pipe(first()).toPromise().then(resp => {
      return resp[0];
    });
    return aux.payload.doc.data().nombres + ' ' + aux.payload.doc.data().apellidos;
  }

  async getPaciente(uid: string){
    console.log(uid);
    const aux = await (await this.pacienteSrv.getPaciente2(uid)).pipe(first()).toPromise().then(resp => {
      return resp[0];
    });
    return aux.payload.doc.data().nombres + ' ' + aux.payload.doc.data().apellidos;
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando citas...',
    });
    return this.loading.present();
  }

  trackByFn(index, obj) {
    return obj.uid;
  }
}
