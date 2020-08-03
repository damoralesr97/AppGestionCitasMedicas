import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Paciente } from '../models/paciente';
import { Cita } from '../models/cita';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private afAuth: AngularFireAuth, private angularFirestore: AngularFirestore, private alertController: AlertController) { }

  // Obtener paciente
  getPaciente(uid: string){
    return this.angularFirestore.collection('usuarios').doc(uid).snapshotChanges();
  }

  async getPaciente2(uid: string) {
    return this.angularFirestore.collection<Paciente>('usuarios', ref => ref.where('uid', '==', uid)).snapshotChanges();
  }

  // Obtener todos los pacientes
  getPacientes(): Observable<any[]>{
    return this.angularFirestore.collection('usuarios',
      ref => ref.where('rol', '==', 'paciente').where('estado', '==', 'activo')).valueChanges();
  }

  // RegistrarPaciente
  async onRegister(paciente: Paciente) {
    try{
      const pac = await this.afAuth.createUserWithEmailAndPassword(paciente.email, paciente.contrasena);
      paciente.uid = pac.user.uid;
      paciente.rol = 'paciente';
      paciente.estado = 'activo';
      const param = JSON.parse(JSON.stringify(paciente));
      this.angularFirestore.collection('usuarios').doc(pac.user.uid).set(param);
      this.presentAlert('Paciente registrado exitosamente!');
    } catch (error) {
      this.presentAlert(error.message);
    }
  }

  // Eliminar paciente
  deletePaciente(paciente: Paciente) {
    try{
      this.angularFirestore.collection('usuarios').doc(paciente.uid).set(paciente);
      this.presentAlert('Paciente eliminado');
    } catch (error) {
      this.presentAlert(error.message);
    }
  }

  // Guardar Cita
  guardarCita(cita: Cita) {
    cita.uid = this.angularFirestore.createId();
    const param = JSON.parse(JSON.stringify(cita));
    return this.angularFirestore.collection('citas').doc(cita.uid).set(param, {merge: true});
  }

  // Obtener Citas Pendientes
  async getCitasPendientes(pacienteUid: string) {
    return this.angularFirestore.collection<Cita>('citas', ref => ref.where('estado', '==', 'PENDIENTE')
      .where('pacienteUid', '==', pacienteUid)).snapshotChanges();
  }

  // Actualizar paciente
  updatePaciente(paciente: Paciente) {
    try {
      this.angularFirestore.collection('usuarios').doc(paciente.uid).set(paciente);
      this.presentAlert('Paciente actualizado correctamente');
    } catch (error) {
      this.presentAlert(error.message);
    }
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
