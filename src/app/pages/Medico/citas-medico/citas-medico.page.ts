import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserC } from './../../../shared/models/user.class';
import { CitaC } from './../../../shared/models/cita.class';
import { MedicoService } from '../../../shared/services/medico.service';

@Component({
  selector: 'app-citas-medico',
  templateUrl: './citas-medico.page.html',
  styleUrls: ['./citas-medico.page.scss'],
})
export class CitasMedicoPage implements OnInit {

  citasSolicitudes: Observable<any[]>;
  numeroCitasSolicitudes: number;
  
  constructor(private medicoService: MedicoService, public router: Router) { }


  ngOnInit() {
    
    this.citasSolicitudes=this.medicoService.getCitasPendientes();
    this.citasSolicitudes.subscribe(data => {
      this.numeroCitasSolicitudes=data.length;
    })
  }

  showCitaPorAtender()
  {
    this.router.navigate(['citas-medico-por-atender']);
  }

  showCitaAtendidas()
  {
    this.router.navigate(['citas-medico-atendidas']);
  }


  trackByFn(index, obj) {
    return obj.uid;
    
  }

  showRequestCitas()
  {
    this.router.navigate(['citas-solicitudes']);
  }

  showCrearCita(){
    this.router.navigate(['crear-cita-medico']);
  }
}
