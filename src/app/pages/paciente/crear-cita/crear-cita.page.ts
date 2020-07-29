import { Component, OnInit } from '@angular/core';
import { Cita } from '../../../shared/models/cita';
import { Paciente } from 'src/app/shared/models/paciente';
import { AuthService } from '../../../shared/services/auth.service';
import { PacienteService } from '../../../shared/services/paciente.service';
import { Observable } from 'rxjs';
import { MedicoService } from '../../../shared/services/medico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.page.html',
  styleUrls: ['./crear-cita.page.scss'],
})
export class CrearCitaPage implements OnInit {
  cita: Cita = new Cita();
  paciente: any = {
    id: '',
    data: {} as Paciente
  };
  medicos: Observable<any>;

  // tslint:disable-next-line: max-line-length
  constructor(private authSrv: AuthService, private pacienteSrv: PacienteService, private medicoSrv: MedicoService, private router: Router) { }

  ngOnInit() {
    this.authSrv.getUser().subscribe(resp => {
      this.pacienteSrv.getPaciente(resp.uid).subscribe((res) => {
        if (res.payload.data() != null){
          this.paciente.id = res.payload.id;
          this.paciente.data = res.payload.data();
        } else {
          this.paciente.data = {} as Paciente;
        }
      });
    });
    this.medicos = this.medicoSrv.getMedicos();
  }

  onSubmitTemplate(){
    this.cita.pacienteUid = this.paciente.id;
    this.cita.estado = 'PENDIENTE';
    this.pacienteSrv.guardarCita(this.cita);
    this.router.navigateByUrl('/ver-citas-paciente');
  }

  trackByFn(index, obj) {
    return obj.uid;
  }

}
