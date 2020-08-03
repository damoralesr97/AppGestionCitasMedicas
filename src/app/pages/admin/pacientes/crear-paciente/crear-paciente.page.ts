import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../../../shared/models/paciente';
import { PacienteService } from '../../../../shared/services/paciente.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.page.html',
  styleUrls: ['./crear-paciente.page.scss'],
})
export class CrearPacientePage implements OnInit {
  paciente: Paciente = new Paciente();

  constructor(private pacienteSrv: PacienteService) { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    this.pacienteSrv.onRegister(this.paciente);
  }

}
