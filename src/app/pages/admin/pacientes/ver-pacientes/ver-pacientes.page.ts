import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PacienteService } from '../../../../shared/services/paciente.service';
import { Paciente } from '../../../../shared/models/paciente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-pacientes',
  templateUrl: './ver-pacientes.page.html',
  styleUrls: ['./ver-pacientes.page.scss'],
})
export class VerPacientesPage implements OnInit {
  pacs: any[] = [];
  textoBuscar = '';

  constructor(private pacienteSrv: PacienteService, private router: Router) { }

  ngOnInit() {
    this.pacienteSrv.getPacientes().subscribe(res => {
      res.forEach((p) => {
        this.pacs.push(p);
      });
    });
  }

  trackByFn(index, obj) {
    return obj.uid;
  }

  eliminarPaciente(paciente: Paciente) {
    paciente.estado = 'inactivo';
    this.pacienteSrv.deletePaciente(paciente);
  }

  showPaciente(pacienteUid: string) {
    this.router.navigate([`editar-paciente-admin/${pacienteUid}`]);
  }

  buscarPaciente(event) {
    const texto = event.target.value;
    this.textoBuscar = texto;
  }

}
