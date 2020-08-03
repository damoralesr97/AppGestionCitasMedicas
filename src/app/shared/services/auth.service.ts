import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line: max-line-length
  constructor(public afAuth: AngularFireAuth, private angularFirestore: AngularFirestore, private alertController: AlertController, private router: Router) { }

  // Obtener usuario de la sesion
  async getUser() {
    return this.afAuth.authState;
  }

  // Obtener informacion del usuario en ela sesion
  getDataUser(uid: string) {
    return this.angularFirestore.collection('usuarios').doc(uid).snapshotChanges();
  }

  // Actualizar informacion de usuario
  updateUser(usuario) {
    try {
      this.angularFirestore.collection('usuarios').doc(usuario.uid).set(usuario);
      this.presentAlert('Información actualizada correctamente', 'Listo');
    } catch (error) {
      this.presentAlert(error.message, 'Error');
    }
  }

  // Actualizar contrasena
  async updatePassword(password: string) {
    try{
      (await this.afAuth.currentUser).updatePassword(password);
      (await this.getUser()).subscribe(res => {
        this.angularFirestore.collection('usuarios').doc(res.uid).update({contrasena: password});
      });
      await this.presentAlert('Contraseña actualizada', 'Listo');
      this.afAuth.signOut();
      this.router.navigateByUrl('login');
    } catch (error) {
      await this.presentAlert(error.message, 'Error');
    }
  }

  // IniciarSesion
  async onLogin(user: User) {
    try{
      const us = await this.afAuth.signInWithEmailAndPassword(user.email, user.contrasena);
      this.angularFirestore.doc<any>(`usuarios/${us.user.uid}`).valueChanges().subscribe( usuario => {
        if (usuario.rol === 'paciente'){
          this.router.navigateByUrl('home-paciente');
        } else if (usuario.rol === 'medico'){
          console.log('eres medico');
        } else if (usuario.rol === 'admin'){
          this.router.navigateByUrl('home-admin');
        }
      });
    } catch (error) {
      this.presentAlert(error.message, 'Error al iniciar sesión');
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
