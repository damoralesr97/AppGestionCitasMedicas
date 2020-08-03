import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { UserC } from './../../../shared/models/user.class';
import { CitaC } from './../../../shared/models/cita.class';
import { MedicoService } from '../../../shared/services/medico.service';

@Component({
  selector: 'app-crear-cita-medico',
  templateUrl: './crear-cita-medico.page.html',
  styleUrls: ['./crear-cita-medico.page.scss'],
})
export class CrearCitaMedicoPage implements OnInit {

  cita: CitaC = new CitaC()
  citaHoraFecha: CitaC = new CitaC()
  usuario: UserC = new UserC();
  usuarios: Observable<any[]>;
  cedula: string;
  apellidosUsuario: string;
  usuarioApellidosNombres: string;
  fechaActual: string
  

  constructor(public router: Router,private medicoService: MedicoService, public alertController: AlertController) { }

  ngOnInit() {
    this.fechaActual = new Date().toISOString();
  }

  trackByFn(index, obj) {
    return obj.uid;
    
  }

  async guardarCita(){
    
    var nombresApellidos=new Array();
    var nombres;
    var apellidos;

    nombresApellidos=this.usuarioApellidosNombres.trim().split(' ');
    nombres=nombresApellidos[2]+' '+nombresApellidos[3];
    apellidos=nombresApellidos[0]+' '+nombresApellidos[1];

    var fechaFormato=this.fechaActual.substring(0,10);
    
    this.usuario=await this.medicoService.getUsuarioByApellidosNombres2(apellidos,nombres);
    this.citaHoraFecha = await this.medicoService.getCitaFechaHora(fechaFormato,this.cita.hora);

    if(this.citaHoraFecha!=undefined)
    {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        //subHeader: 'Subtitle',
        message: 'Ya tiene una cita este dia a esta hora',
        buttons: ['OK']
      });
      await alert.present();
    }
    else
    {
      this.cita.pacienteUid=this.usuario.uid;
      this.cita.estado="Por atender";
      this.cita.fecha=fechaFormato;
      this.medicoService.saveCita(this.cita);
      this.router.navigate(['citas-medico']);
    }
  }

  onEnterCedula(){
    this.usuarios=null;
    console.log(this.cedula);
    this.usuarios= this.medicoService.getUsuariosByCedula(Number(this.cedula));
    
  }

  onEnterApellidos(){
    //console.log(this.apellidosNombres);
    var apellidos=new Array();
    var apellido1;
    var apellido2;

    apellidos=this.apellidosUsuario.split(' ');
    
    if(apellidos.length>2){
      this.alertNombreApellido();
    }
    else{
      if(apellidos.length==1)
      {
        apellido1=apellidos[0];
        this.usuarios=null;
        this.usuarios= this.medicoService.getUsuarioByApellido(apellido1);
      }
      else{
        apellido1=apellidos[0];
        apellido2=apellidos[1];
        this.usuarios=null;
        this.usuarios= this.medicoService.getUsuarioByApellidos(apellido1,apellido2);
      }
      
    }

  }

  async alertNombreApellido(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      //subHeader: 'Subtitle',
      message: 'Ingresar maximo 2 apellidos',
      buttons: ['OK']
    });
    await alert.present();

  }
}
