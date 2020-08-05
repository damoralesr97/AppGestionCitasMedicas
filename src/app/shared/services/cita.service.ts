import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Consulta } from './../models/consulta.class';
import { Receta } from './../models/receta.class';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private angularFirestore: AngularFirestore,private alertController: AlertController,private router: Router) { }


  async getCitas(){
    return this.angularFirestore.collection<Cita>('citas',ref => ref.where('estado', '<', 'eliminada')).snapshotChanges();
  }

  getCita(uid: string){
    return this.angularFirestore.collection('citas').doc(uid).snapshotChanges();
  }

  async getReceta(uid: string){
    return this.angularFirestore.collection<Receta>('recetas', ref => ref.where('citaUid', '==', uid)).snapshotChanges();
  }

  async getConsulta(uid: string){
    return this.angularFirestore.collection<Consulta>('consultas', ref => ref.where('citaUid','==',uid)).snapshotChanges();
  }

  updateCita(cita){
    try {
      this.angularFirestore.collection('citas').doc(cita.uid).set(cita);
      this.presentAlert('Información actualizada correctamente', 'Listo');
    } catch (error) {
      this.presentAlert(error.message, 'Error');
    }
  }

  deleteCita(cita){
    try {
      this.angularFirestore.collection('citas').doc(cita.uid).set(cita);
      this.presentAlert('Cita eliminada con éxito', 'Listo');
      this.router.navigateByUrl('/home-admin');
    } catch (error) {
      this.presentAlert(error.message, 'Error');
    }
  }

  // Mostrar alertas
  async presentAlert(mensaje: string, titulo: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: titulo,
      subHeader: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
}
