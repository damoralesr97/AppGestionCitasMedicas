import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Paciente } from '../models/paciente';
import { Cita } from '../models/cita';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private afAuth: AngularFireAuth, private angularFirestore: AngularFirestore) { }

  // Obtener paciente
  getPaciente(uid: string){
    return this.angularFirestore.collection('usuarios').doc(uid).snapshotChanges();
  }

  // RegistrarPaciente
  async onRegister(paciente: Paciente) {
    try{
      const pac = await this.afAuth.createUserWithEmailAndPassword(paciente.email, paciente.contrasena);
      paciente.uid = pac.user.uid;
      paciente.rol = 'paciente';
      const param = JSON.parse(JSON.stringify(paciente));
      this.angularFirestore.collection('usuarios').doc(pac.user.uid).set(param);
      return pac;
    } catch (error) {
      console.log('Error on register user', error);
      return error;
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

}
