import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Medico } from '../models/medico';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private afAuth: AngularFireAuth, private angularFirestore: AngularFirestore) { }

  // RegistrarMedico
  async onRegister(medico: Medico) {
    try{
      const med = await this.afAuth.createUserWithEmailAndPassword(medico.email, medico.contrasena);
      medico.uid = med.user.uid;
      medico.rol = 'medico';
      const param = JSON.parse(JSON.stringify(medico));
      this.angularFirestore.collection('usuarios').doc(med.user.uid).set(param);
      return med;
    } catch (error) {
      console.log('Error on register user', error);
      return error;
    }
  }

  // Obtener medico
  async getMedico(medicoUid: string) {
    return this.angularFirestore.collection<Medico>('usuarios', ref =>
      ref.where('uid', '==', medicoUid)).snapshotChanges();
  }

  // Obtener todos los medicos
  getMedicos(): Observable<any[]>{
    return this.angularFirestore.collection('usuarios',
      ref => ref.where('rol', '==', 'medico')).valueChanges();
  }
}
