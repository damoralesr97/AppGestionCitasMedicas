import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private angularFirestore: AngularFirestore) { }


  async getCitas(){
    return this.angularFirestore.collection<Cita>('citas').snapshotChanges();
  }
}
