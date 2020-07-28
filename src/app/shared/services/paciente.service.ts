import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private afAuth: AngularFireAuth, private angularFirestore: AngularFirestore) { }

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
}
