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

  async getUser() {
    return this.afAuth.authState;
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
          console.log('eres admin');
        }
      });
    } catch (error) {
      this.presentAlert(error.message);
    }
  }

  // Mostrar alertas
  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error al iniciar sesión',
      subHeader: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
}
