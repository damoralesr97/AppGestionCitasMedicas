import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Medico } from '../models/medico';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private afAuth: AngularFireAuth, private angularFirestore: AngularFirestore, private alertController: AlertController) { }

  // RegistrarMedico
  async onRegister(medico: Medico) {
    try{
      const med = await this.afAuth.createUserWithEmailAndPassword(medico.email, medico.contrasena);
      medico.uid = med.user.uid;
      medico.rol = 'medico';
      medico.estado = 'activo';
      const param = JSON.parse(JSON.stringify(medico));
      this.angularFirestore.collection('usuarios').doc(med.user.uid).set(param);
      this.presentAlert('Médico registrado exitosamente!');
    } catch (error) {
      this.presentAlert(error.message);
    }
  }

  // Obtener medico

  async getMedico2(medicoUid: string) {
    return this.angularFirestore.collection<Medico>('usuarios', ref => ref.where('uid', '==', medicoUid)).snapshotChanges();
  }

  // Obtener todos los medicos
  getMedicos(): Observable<any[]>{
    return this.angularFirestore.collection('usuarios',
      ref => ref.where('rol', '==', 'medico').where('estado', '==', 'activo')).valueChanges();
  }

  // Eliminar medico
  deleteMedico(medico: Medico) {
    try{
      this.angularFirestore.collection('usuarios').doc(medico.uid).set(medico);
      this.presentAlert('Médico eliminado');
    } catch (error) {
      this.presentAlert(error.message);
    }
  }

  // Actualizar medico
  updateMedico(medico: Medico) {
    try {
      this.angularFirestore.collection('usuarios').doc(medico.uid).set(medico);
      this.presentAlert('Médico actualizado correctamente');

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
