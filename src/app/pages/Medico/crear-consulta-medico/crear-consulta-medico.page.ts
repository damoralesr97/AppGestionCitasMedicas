
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Consulta } from './../../../shared/models/consulta.class';
import { Factura } from './../../../shared/models/factura.class';
import { UserC } from './../../../shared/models/user.class';
import { CitaC } from './../../../shared/models/cita.class';
import { MedicoService } from '../../../shared/services/medico.service';


@Component({
  selector: 'app-crear-consulta-medico',
  templateUrl: './crear-consulta-medico.page.html',
  styleUrls: ['./crear-consulta-medico.page.scss'],
})
export class CrearConsultaMedicoPage implements OnInit {

  consulta: Consulta = new Consulta();
  cita: CitaC = new CitaC();
  usuario: UserC = new UserC();
  usuario2: UserC = new UserC();
  usuarios: Observable<any[]>;
  cedula: string;
  apellidosUsuario: string;
  usuarioApellidosNombre: string;
  fechaActual: string;
  click: number;
  uidCita: string;
  sintomas: string;
  factura: Factura = new Factura();
  

  constructor(private route: ActivatedRoute, public router: Router,private medicoService: MedicoService, public alertController: AlertController) { }

  async ngOnInit() {
    this.uidCita = this.route.snapshot.paramMap.get("id")
    this.fechaActual = new Date().toISOString();
    this.cita=await this.medicoService.getCitaById(this.uidCita);
    this.consulta.pacienteUid=this.cita.pacienteUid;
    this.sintomas=this.cita.sintomas;
    this.click=0;

  }

  trackByFn(index, obj) {
    return obj.uid;
    
  }

  async guardarConsulta(){
    
    this.usuario=await this.medicoService.getUsuarioById(this.consulta.pacienteUid);

    this.consulta.fecha=this.fechaActual.substring(0,10);
    this.consulta.pacienteUid=this.usuario.uid;
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Hecho',
      //subHeader: 'Subtitle',
      message: 'Desea guardar y generar la Factura?',
      buttons: [
        {
          text: 'Ok',
          role: 'ok',
          handler: () => 
          {
            this.cita.estado="Atendido";
            this.medicoService.saveCita(this.cita);
            this.consulta.citaUid=this.cita.uid;
            this.consulta.sintomas=this.sintomas;

            this.factura.citaUid=this.cita.uid;
            this.factura.consultaUid=this.consulta.uid;
            //guardar el uid de la cita
            //cambiar uid cita, por atendido
            this.factura.concepto=this.consulta.sintomas;
            this.factura.usuarioUid=this.consulta.pacienteUid;
            this.factura.subtotalCero=Number(this.consulta.total);
            this.factura.iva=Number(Number(this.consulta.total)*0.12);
            this.factura.subtotalIva=Number(Number(this.consulta.total)+Number(this.factura.iva));
            this.factura.formaPago="efectivo";
            this.factura.fecha=this.consulta.fecha;
            this.factura.total=Number(Number(this.consulta.total)+ Number(this.factura.iva));

           
            this.medicoService.saveFactura(this.factura);
            this.medicoService.saveConsulta(this.consulta);
            this.router.navigate([`crear-receta/${this.consulta.uid}`])
          }

        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            
          }
        }
      ]
    });
    await alert.present();
  }
  
  async verUsuario(){

    this.usuario2=await this.medicoService.getUsuarioById(this.consulta.pacienteUid);
    this.usuario2.apellidos="Apellidos: "+this.usuario2.apellidos;
    this.usuario2.nombres="Nombres: "+this.usuario2.nombres;
    this.usuario2.fechaNacimiento="Fecha Nacimiento: "+this.usuario2.fechaNacimiento;
    this.usuario2.grupoSanguineo="Grupo Sanguineo: "+this.usuario2.grupoSanguineo;
    this.usuario2.estadoCivil="Estado Civil: "+this.usuario2.estadoCivil;
    this.usuario2.ocupacion="Ocupacion: "+this.usuario2.ocupacion;
    this.click=1;
  }

  async alertNombreApellido(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      //subHeader: 'Subtitle',
      message: 'Ingresar solo un Apellido y un Nombre',
      buttons: ['OK']
    });
    await alert.present();

  }
}
