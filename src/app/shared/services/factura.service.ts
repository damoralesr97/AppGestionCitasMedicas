import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Factura } from './../models/factura.class';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private angularFirestore: AngularFirestore,private alertController: AlertController,private router: Router) { }

  async getFacturas(){
    return this.angularFirestore.collection<Factura>('facturas',ref => ref.where('estado','==','activa')).snapshotChanges();
  }

  getFactura(uid: string){
    return this.angularFirestore.collection('facturas').doc(uid).snapshotChanges();
  }

  async getFacturaCita(uid: string){
    return this.angularFirestore.collection<Factura>('facturas',ref => ref.where('citaUid','==',uid)).snapshotChanges();
  }

  deleteFactura(factura: Factura) {
    try{
      this.angularFirestore.collection('facturas').doc(factura.uid).set(factura);
      this.presentAlert('Factura analuda con exito');
      this.router.navigateByUrl('/home-admin');
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
