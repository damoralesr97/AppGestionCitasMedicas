import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Medico } from '../models/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private angularFirestore: AngularFirestore) { }

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
