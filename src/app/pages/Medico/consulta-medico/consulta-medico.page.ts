import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserC } from './../../../shared/models/user.class';
import { Consulta } from './../../../shared/models/consulta.class';
import { MedicoService } from '../../../shared/services/medico.service';

@Component({
  selector: 'app-consulta-medico',
  templateUrl: './consulta-medico.page.html',
  styleUrls: ['./consulta-medico.page.scss'],
})
export class ConsultaMedicoPage implements OnInit {

  consulta: Consulta = new Consulta()
  usuario: UserC = new UserC()

  constructor(public router: Router,private medicoService: MedicoService, private route: ActivatedRoute) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id")
    this.consulta = await this.medicoService.getConsultaById(id);
    this.usuario = await this.medicoService.getUsuarioById(this.consulta.pacienteUid);
  }

  actualizaConsulta()
  {
    this.medicoService.saveConsulta(this.consulta);
    this.router.navigate(['consultas-medico']);
    
  }

  showReceta(){
    this.router.navigate([`receta/${this.consulta.uid}`]);
  }

}
