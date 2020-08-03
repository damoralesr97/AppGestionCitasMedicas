import { Component, OnInit } from '@angular/core';
import { Medico } from '../../../../shared/models/medico';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from '../../../../shared/services/medico.service';

@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.page.html',
  styleUrls: ['./editar-medico.page.scss'],
})
export class EditarMedicoPage implements OnInit {
  medico: any = {
    id: '',
    data: {} as Medico
  };

  constructor(private route: ActivatedRoute, private medicoSrv: MedicoService, private router: Router) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    (await this.medicoSrv.getMedico2(id)).subscribe((res) => {
      if (res[0].payload.doc.data() != null){
        this.medico.id = res[0].payload.doc.id;
        this.medico.data = res[0].payload.doc.data();
      } else {
        this.medico.data = {} as Medico;
      }
    });
  }

  editarMedico(){
    this.medicoSrv.updateMedico(this.medico.data);
    this.router.navigateByUrl('ver-medicos-admin');
  }

}
