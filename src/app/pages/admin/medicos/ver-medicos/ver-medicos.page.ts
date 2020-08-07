import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../../../shared/services/medico.service';
import { Observable } from 'rxjs';
import { Medico } from 'src/app/shared/models/medico';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-medicos',
  templateUrl: './ver-medicos.page.html',
  styleUrls: ['./ver-medicos.page.scss'],
})
export class VerMedicosPage implements OnInit {
  mds: any[] = [];
  textoBuscar = '';

  constructor(private medicoSrv: MedicoService, private router: Router) { }

  ngOnInit() {
    this.medicoSrv.getMedicos().subscribe(res => {
      res.forEach((m) => {
        this.mds.push(m);
      });
    });
  }

  trackByFn(index, obj) {
    return obj.uid;
  }

  eliminarMedico(medico: Medico) {
    medico.estado = 'inactivo';
    this.medicoSrv.deleteMedico(medico);
  }

  showMedico(medicoUid: string) {
    this.router.navigate([`editar-medico-admin/${medicoUid}`]);
  }

  buscarMedico(event) {
    const texto = event.target.value;
    this.textoBuscar = texto;
  }

}
