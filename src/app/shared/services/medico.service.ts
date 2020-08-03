
import { first } from 'rxjs/operators';
import { Cita } from './../models/cita';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Medico } from '../models/medico';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
//NUEVAS IMPORTACIONES

import { CitaC } from '../models/cita.class';
import { Consulta } from '../models/consulta.class';
import { Factura } from '../models/factura.class';
import { Receta } from '../models/receta.class';
import { UserC } from './../models/user.class';


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

  getMedico(uid: string){
    return this.angularFirestore.collection('usuarios').doc(uid).snapshotChanges();
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

  //******************************************************************** */
  //******************************************************************** */
  //******************************************************************** */
  //******************************************************************** */
  //  NUEVOS METODOS //
  //******************************************************************** */
  //******************************************************************** */
  //******************************************************************** */
  //******************************************************************** */

  //------------------------------CITAS---------------------------------

  public saveCita(cita: CitaC)
  {
    const refCita = this.angularFirestore.collection("citas")
    if(cita.uid==null)
    {
      cita.uid= this.angularFirestore.createId()
    }
    const param = JSON.parse(JSON.stringify(cita));
    refCita.doc(cita.uid).set(param, {merge: true})

  }

  public getCita(uid: string): Observable<any>{
    const itemDoc = this.angularFirestore.doc<any>(`citas/${uid}`);
    return itemDoc.valueChanges();
  }

   //Devuelve un empleado manipulable
   async getCitaById(uid: string): Promise<CitaC>
   {
     try{
         let aux:any = await this.angularFirestore.collection("citas", 
             ref => ref.where('uid', '==', uid))
                       .valueChanges().pipe(first()).toPromise().then(doc => {                    	  
                           return doc;
                       }).catch(error => {
                           throw error;
                       });
         if(aux.length==0)
             return undefined;
         return aux[0];
     }catch(error){
       console.error("Error", error);
       throw error;
     } 
   }

  public getCitaNombre(nombre: string): Observable<any[]>
  {
    return this.angularFirestore.collection('citas', 
      ref => ref.where("nombre","==",`${nombre}`)
                .orderBy('fecha', 'asc')).valueChanges();
  }

  public getCitasPorAtender(): Observable<any[]>{
    return this.angularFirestore.collection('citas',
      ref => ref.where("estado","==",'Por atender')
             .orderBy('fecha', 'desc')).valueChanges();
  }

  public getCitasAtendidas(): Observable<any[]>{
    return this.angularFirestore.collection('citas',
      ref => ref.where("estado","==",'Atendido')
             .orderBy('fecha', 'desc')).valueChanges();
  }

  
  //Devuelve una cita manipulable
  async getCitaFechaHora(fecha:string, hora:string): Promise<CitaC>
  {
    try{
        let aux:any = await this.angularFirestore.collection("citas", 
        ref => ref.where("fecha","==",`${fecha}`).where("hora","==",`${hora}`) )
                      .valueChanges().pipe(first()).toPromise().then(doc => {                    	  
                          return doc;
                      }).catch(error => {
                          throw error;
                      });
        if(aux.length==0)
            return undefined;
        return aux;
    }catch(error){
      console.error("Error", error);
      throw error;
    } 
  }

  public getCitasPendientes(): Observable<any[]>{
    return this.angularFirestore.collection('citas',
      ref => ref.where("estado","==",`PENDIENTE`)).valueChanges();
  }

  //----------------------------Usuarios-------------------------------------------

  async getUsuarioById(uid: string): Promise<UserC>
   {
     try{
         let aux:any = await this.angularFirestore.collection("usuarios", 
             ref => ref.where('uid', '==', uid))
                       .valueChanges().pipe(first()).toPromise().then(doc => {                    	  
                           return doc;
                       }).catch(error => {
                           throw error;
                       });
         if(aux.length==0)
             return undefined;
         return aux[0];
     }catch(error){
       console.error("Error", error);
       throw error;
     } 
   }

   public getUsuarioByApellidos(apellido1:string,apellido2:string,): Observable<any[]>{
    return this.angularFirestore.collection('usuarios',
      ref => ref.where("rol","==","paciente").orderBy("apellidos").startAt(apellido1).endAt(apellido2).limit(2)).valueChanges();
  }

  public getUsuarioByApellido(apellido:string): Observable<any[]>{
    return this.angularFirestore.collection('usuarios',
      ref => ref.where("rol","==","paciente").orderBy("apellidos").startAt(apellido).limit(2)).valueChanges();
  }

   public getUsuariosByCedula(cedula:number): Observable<any[]>{
    return this.angularFirestore.collection('usuarios',
      ref => ref.where("cedula","==",cedula).where("rol","==","paciente")).valueChanges();
  }

   public getUsuarios(): Observable<any[]>{
    return this.angularFirestore.collection('usuarios',
      ref => ref.orderBy('nombres','desc')).valueChanges();
  }

  async getUsuarioByApellidosNombres2(apellidos: string, nombres:string): Promise<UserC>
   {
     try{
         console.log(apellidos);
         console.log(nombres);
         let aux:any = await this.angularFirestore.collection("usuarios", 
             ref => ref.where('apellidos', '==', apellidos)
                       .where('nombres', '==', nombres))
                       .valueChanges().pipe(first()).toPromise().then(doc => {                    	  
                           return doc;
                       }).catch(error => {
                           throw error;
                       });
         if(aux.length==0)
             return undefined;
         return aux[0];
     }catch(error){
       console.error("Error", error);
       throw error;
     } 
   }

  //----------------------------------Consultas------------------------------------------------

  public saveConsulta(consulta: Consulta)
  {
    const refConsulta = this.angularFirestore.collection("consultas")
    if(consulta.uid==null)
    {
      consulta.uid= this.angularFirestore.createId()
    }
    const param = JSON.parse(JSON.stringify(consulta));
    refConsulta.doc(consulta.uid).set(param, {merge: true})

  }

  public getConsulta(uid: string): Observable<any>{
    const itemDoc = this.angularFirestore.doc<any>(`consultas/${uid}`);
    return itemDoc.valueChanges();
  }

   //Devuelve un empleado manipulable
   async getConsultaById(uid: string): Promise<Consulta>
   {
     try{
         let aux:any = await this.angularFirestore.collection("consultas", 
             ref => ref.where('uid', '==', uid))
                       .valueChanges().pipe(first()).toPromise().then(doc => {                    	  
                           return doc;
                       }).catch(error => {
                           throw error;
                       });
         if(aux.length==0)
             return undefined;
         return aux[0];
     }catch(error){
       console.error("Error", error);
       throw error;
     } 
   }

   async getConsultaByCitaId(uid: string): Promise<Consulta>
   {
     try{
         let aux:any = await this.angularFirestore.collection("consultas", 
             ref => ref.where('citaUid', '==', uid))
                       .valueChanges().pipe(first()).toPromise().then(doc => {                    	  
                           return doc;
                       }).catch(error => {
                           throw error;
                       });
         if(aux.length==0)
             return undefined;
         return aux[0];
     }catch(error){
       console.error("Error", error);
       throw error;
     } 
   }

  public getConsultaNombre(nombre: string): Observable<any[]>
  {
    return this.angularFirestore.collection('consulta', 
      ref => ref.where("nombre","==",`${nombre}`)
                .orderBy('fecha', 'asc')).valueChanges();
  }

  public getConsultas(): Observable<any[]>{
    return this.angularFirestore.collection('consultas',
      ref => ref.orderBy("fecha","desc")).valueChanges();
  }

  
  //Devuelve una cita manipulable
  async getConsultaFecha(fecha:string): Promise<CitaC>
  {
    try{
        let aux:any = await this.angularFirestore.collection("consultas", 
        ref => ref.where("fecha","==",`${fecha}`))
                      .valueChanges().pipe(first()).toPromise().then(doc => {                    	  
                          return doc;
                      }).catch(error => {
                          throw error;
                      });
        if(aux.length==0)
            return undefined;
        return aux;
    }catch(error){
      console.error("Error", error);
      throw error;
    } 
  }


//----------------------------Facturas-----------------------------------

  public saveFactura(factura: Factura)
  {
    const refCita = this.angularFirestore.collection("facturas")
    if(factura.uid==null)
    {
      factura.uid= this.angularFirestore.createId()
    }
    const param = JSON.parse(JSON.stringify(factura));
    refCita.doc(factura.uid).set(param, {merge: true})

  }

  public getFacturas(): Observable<any[]>{
    return this.angularFirestore.collection('facturas',
      ref => ref.orderBy("fecha","desc")).valueChanges();
  }

  async getFacturaById(uid: string): Promise<Factura>
    {
      try{
          let aux:any = await this.angularFirestore.collection("facturas", 
              ref => ref.where('uid', '==', uid))
                        .valueChanges().pipe(first()).toPromise().then(doc => {                    	  
                            return doc;
                        }).catch(error => {
                            throw error;
                        });
          if(aux.length==0)
              return undefined;
          return aux[0];
      }catch(error){
        console.error("Error", error);
        throw error;
      } 
    }

    ///////////////////////////////////////Recetas//////////////////////////////////////


    public saveReceta(receta: Receta)
    {
      const refCita = this.angularFirestore.collection("recetas")
      if(receta.uid==null)
      {
        receta.uid= this.angularFirestore.createId()
      }
      const param = JSON.parse(JSON.stringify(receta));
      refCita.doc(receta.uid).set(param, {merge: true})

  }

  async getRecetaById(uid: string): Promise<Receta>
    {
      try{
          let aux:any = await this.angularFirestore.collection("recetas", 
              ref => ref.where('uid', '==', uid))
                        .valueChanges().pipe(first()).toPromise().then(doc => {                    	  
                            return doc;
                        }).catch(error => {
                            throw error;
                        });
          if(aux.length==0)
              return undefined;
          return aux[0];
      }catch(error){
        console.error("Error", error);
        throw error;
      } 
    }

    async getRecetaByConsultaId(uid: string): Promise<Receta>
    {
      try{
          let aux:any = await this.angularFirestore.collection("recetas", 
              ref => ref.where('consultaUid', '==', uid))
                        .valueChanges().pipe(first()).toPromise().then(doc => {                    	  
                            return doc;
                        }).catch(error => {
                            throw error;
                        });
          if(aux.length==0)
              return undefined;
          return aux[0];
      }catch(error){
        console.error("Error", error);
        throw error;
      } 
    }

}
