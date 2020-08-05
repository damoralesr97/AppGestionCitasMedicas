import { Paciente } from './../../../../shared/models/paciente';
import { Observable } from 'rxjs';
import { PacienteService } from './../../../../shared/services/paciente.service';
import { MedicoService } from './../../../../shared/services/medico.service';
import { CitaService } from './../../../../shared/services/cita.service';
import { Cita } from './../../../../shared/models/cita';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/shared/models/medico';

@Component({
  selector: 'app-ver-cita',
  templateUrl: './ver-cita.page.html',
  styleUrls: ['./ver-cita.page.scss'],
})
export class VerCitaPage implements OnInit {

  cita: any={
    id :'',
    data: {} as Cita
  }
  medico: any={
    id:'',
    data: {} as Medico
  }
  paciente: any={
    id:'',
    data:{} as Paciente
  }

  constructor(private route: ActivatedRoute,private citaSrv: CitaService,private medicoSrv:MedicoService,private pacienteSrv: PacienteService,private router: Router) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    (await this.citaSrv.getCita(id)).subscribe((res) =>{
      if (res.payload.data() != null){
        this.cita.id = res.payload.id;
        this.cita.data = res.payload.data();
        (this.medicoSrv.getMedico(this.cita.data.medicoUid)).subscribe((res) =>{
          if(res.payload.data() !=null){
            this.medico.id = res.payload.id;
            this.medico.data = res.payload.data();
          }else{
            this.medico.data ={} as Medico;
          }
        });
        (this.pacienteSrv.getPaciente(this.cita.data.pacienteUid)).subscribe((res) =>{
          if(res.payload.data() !=null){
            this.paciente.id = res.payload.id;
            this.paciente.data = res.payload.data();
          }else{
            this.paciente.data ={} as Paciente;
          }
        });
      } else {
        this.cita.data = {} as Cita;
      }
    });
  }

  showReceta(uid: string){
    this.router.navigate([`ver-receta/${uid}`]);
  }

  showConsulta(uid: string){
    this.router.navigate([`ver-consulta/${uid}`]);
  }

  showFactura(uid: string){
    this.router.navigate([`ver-factura-cita/${uid}`])
  }

  showCita(uid: string){
    this.router.navigate([`editar-cita/${uid}`])
  }
}
