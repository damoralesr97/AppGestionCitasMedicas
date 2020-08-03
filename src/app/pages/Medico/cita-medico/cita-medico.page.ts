import { UserC } from './../../../shared/models/user.class';
import { CitaC } from './../../../shared/models/cita.class';
import { Consulta } from '../../../shared/models/consulta.class';
import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../../shared/services/medico.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cita-medico',
  templateUrl: './cita-medico.page.html',
  styleUrls: ['./cita-medico.page.scss'],
})
export class CitaMedicoPage implements OnInit {

  cita: CitaC = new CitaC()
  consulta: Consulta = new Consulta()
  usuario: UserC = new UserC()
  idCita: string

  constructor(public router: Router,private medicoService: MedicoService, private route: ActivatedRoute) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id")
    this.cita = await this.medicoService.getCitaById(id);
    this.idCita=this.cita.uid;
    this.usuario = await this.medicoService.getUsuarioById(this.cita.pacienteUid);
  }

  atenderCita()
  {
    this.router.navigate([`crear-consulta-medico/${this.idCita}`])
    this.medicoService.saveCita(this.cita);
  }

  async verConsulta()
  {
    this.consulta= await this.medicoService.getConsultaByCitaId(this.cita.uid);
    this.router.navigate([`consulta-medico/${this.consulta.uid}`]);
  }

}
