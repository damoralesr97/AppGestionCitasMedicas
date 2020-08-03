import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../../../shared/services/paciente.service';
import { Paciente } from 'src/app/shared/models/paciente';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.page.html',
  styleUrls: ['./editar-paciente.page.scss'],
})
export class EditarPacientePage implements OnInit {
  paciente: any = {
    id: '',
    data: {} as Paciente
  };

  constructor(private route: ActivatedRoute, private pacienteSrv: PacienteService, private router: Router) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    (await this.pacienteSrv.getPaciente(id)).subscribe((res) => {
      if (res.payload.data() != null){
        this.paciente.id = res.payload.id;
        this.paciente.data = res.payload.data();
      } else {
        this.paciente.data = {} as Paciente;
      }
    });
  }

  editarPaciente(){
    this.pacienteSrv.updatePaciente(this.paciente.data);
    this.router.navigateByUrl('ver-pacientes-admin');
  }

}
