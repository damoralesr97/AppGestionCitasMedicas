import { Component, OnInit } from '@angular/core';
import { Medico } from '../../../../shared/models/medico';
import { MedicoService } from '../../../../shared/services/medico.service';

@Component({
  selector: 'app-crear-medico',
  templateUrl: './crear-medico.page.html',
  styleUrls: ['./crear-medico.page.scss'],
})
export class CrearMedicoPage implements OnInit {
  medico: Medico = new Medico();

  constructor(private medicoSrv: MedicoService) { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    this.medicoSrv.onRegister(this.medico);
  }

}
