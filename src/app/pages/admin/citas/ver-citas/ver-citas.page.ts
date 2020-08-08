import { Cita } from './../../../../shared/models/cita';
import { Router } from '@angular/router';
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
  textoBuscar = '';

  constructor(private citaService: CitaService,private medicoSrv: MedicoService,private pacienteSrv:PacienteService, private loadingCtrl: LoadingController,private router:Router) { }

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

  showCita(uid: string){
    this.router.navigate([`ver-cita/${uid}`]);
  }

  deleteCitas(cita: Cita){
    cita.estado='eliminada';
    this.citaService.deleteCita(cita);

  }

  buscarCita(event) {
    const texto = event.target.value;
    this.textoBuscar = texto;
  }

  regresar() {
    this.router.navigateByUrl('/home-admin');
  }
}
