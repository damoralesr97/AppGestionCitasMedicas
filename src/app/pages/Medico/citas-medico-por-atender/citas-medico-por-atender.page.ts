import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserC } from './../../../shared/models/user.class';
import { CitaC } from './../../../shared/models/cita.class';
import { MedicoService } from '../../../shared/services/medico.service';

@Component({
  selector: 'app-citas-medico-por-atender',
  templateUrl: './citas-medico-por-atender.page.html',
  styleUrls: ['./citas-medico-por-atender.page.scss'],
})
export class CitasMedicoPorAtenderPage implements OnInit {

  citas: Observable<any[]>;
  
  constructor(private medicoService: MedicoService, public router: Router) { }


  ngOnInit() {
    this.citas=this.medicoService.getCitasPorAtender();
  }

  trackByFn(index, obj) {
    return obj.uid;
    
  }

  
  showCita(id: any)
    {
      this.router.navigate([`cita-medico/${id}`])
    }

}
