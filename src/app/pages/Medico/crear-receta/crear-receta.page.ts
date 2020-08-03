
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { MedicoService } from './../../../shared/services/medico.service';
import { Consulta } from './../../../shared/models/consulta.class';
import { Receta } from './../../../shared/models/receta.class';

@Component({
  selector: 'app-crear-receta',
  templateUrl: './crear-receta.page.html',
  styleUrls: ['./crear-receta.page.scss'],
})
export class CrearRecetaPage implements OnInit {

  uidConsulta: string;
  receta: Receta = new Receta();
  consulta: Consulta = new Consulta();
  fechaActual: string;

  constructor(private route: ActivatedRoute, public router: Router,private medicoService: MedicoService, public alertController: AlertController) { }

  ngOnInit() {
    this.uidConsulta = this.route.snapshot.paramMap.get("id");
    console.log("CONSULTA UID ",this.uidConsulta);
    this.fechaActual = new Date().toISOString();
  }

  async guardarReceta(){
    this.consulta=await this.medicoService.getConsultaById(this.uidConsulta);
    this.receta.fecha=this.fechaActual.substring(0,10);
    this.receta.citaUid=this.consulta.citaUid;
    this.receta.consultaUid=this.consulta.uid;
    this.medicoService.saveReceta(this.receta);
    this.router.navigate(['citas-medico-atendidas'])
  }
}
