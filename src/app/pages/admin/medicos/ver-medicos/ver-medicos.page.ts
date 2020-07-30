import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../../../shared/services/medico.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ver-medicos',
  templateUrl: './ver-medicos.page.html',
  styleUrls: ['./ver-medicos.page.scss'],
})
export class VerMedicosPage implements OnInit {
  medicos: Observable<any>;

  constructor(private medicoSrv: MedicoService) { }

  ngOnInit() {
    this.medicos = this.medicoSrv.getMedicos();
  }

  trackByFn(index, obj) {
    return obj.uid;
  }

}
