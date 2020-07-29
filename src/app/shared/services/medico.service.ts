import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private angularFirestore: AngularFirestore) { }

  // Obtener todos los medicos
  public getMedicos(): Observable<any[]>{
    return this.angularFirestore.collection('usuarios',
      ref => ref.where('rol', '==', 'medico')).valueChanges();
  }
}
