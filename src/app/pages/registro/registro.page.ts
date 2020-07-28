import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../shared/models/paciente';
import { PacienteService } from '../../shared/services/paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  paciente: Paciente = new Paciente();

  constructor(private pacienteSrv: PacienteService, private router: Router) { }

  ngOnInit() {
  }

  registrar(){
    console.log(this.pacienteSrv.onRegister(this.paciente));
    this.router.navigateByUrl('login');
  }

}
