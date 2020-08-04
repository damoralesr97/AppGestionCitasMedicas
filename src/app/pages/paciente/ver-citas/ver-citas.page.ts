import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../shared/services/paciente.service';
import { AuthService } from '../../../shared/services/auth.service';
import { MedicoService } from '../../../shared/services/medico.service';
import { first } from 'rxjs/operators';
import { Medico } from '../../../shared/models/medico';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.page.html',
  styleUrls: ['./ver-citas.page.scss'],
})
export class VerCitasPage implements OnInit {
  citasPendientes: any[] = [];
  citasAprobadas: any[] = [];
  citasAtendidas: any[] = [];
  medico: Medico;
  loading: any;

  // tslint:disable-next-line: max-line-length
  constructor(private authSrv: AuthService, private pacienteSrv: PacienteService, private medicoSrv: MedicoService, private router: Router, private loadingCtrl: LoadingController) {}

  async ngOnInit() {
    this.presentLoading();
    this.citasPendientes = [];
    this.citasAprobadas = [];
    this.citasAtendidas = [];
    const aux = await (await this.authSrv.getUser()).pipe(first()).toPromise().then(resp => {
      return resp;
    });
    await (await this.pacienteSrv.getCitasPendientes(aux.uid)).pipe(first()).toPromise().then( resp => {
      resp.forEach((cita) => {
        this.citasPendientes.push(cita.payload.doc.data());
      });
    });
    await (await this.pacienteSrv.getCitasAprobadas(aux.uid)).pipe(first()).toPromise().then( resp => {
      resp.forEach((cita) => {
        this.citasAprobadas.push(cita.payload.doc.data());
      });
    });
    await (await this.pacienteSrv.getCitasAtendidas(aux.uid)).pipe(first()).toPromise().then( resp => {
      resp.forEach((cita) => {
        this.citasAtendidas.push(cita.payload.doc.data());
      });
    });
    for (let a of this.citasPendientes) {
      a.nombres = await this.getMedico(a.medicoUid);
    }
    for (let a of this.citasAprobadas) {
      a.nombres = await this.getMedico(a.medicoUid);
    }
    for (let a of this.citasAtendidas) {
      a.nombres = await this.getMedico(a.medicoUid);
    }
    this.loading.dismiss();
  }

  nuevaCita() {
    this.router.navigateByUrl('/crear-cita-paciente');
  }

  async getMedico(medicoUid: string) {
    const aux = await (await this.medicoSrv.getMedico2(medicoUid)).pipe(first()).toPromise().then(resp => {
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


}
