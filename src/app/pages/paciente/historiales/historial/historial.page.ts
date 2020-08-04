import { Component, OnInit } from '@angular/core';
import { Consulta } from '../../../../shared/models/consulta.class';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../../../../shared/services/paciente.service';
import { Receta } from '../../../../shared/models/receta.class';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  historial: any = {
    id: '',
    data: {} as Consulta
  };
  receta: any = {
    id: '',
    data: {} as Receta
  };

  constructor(private route: ActivatedRoute, private pacienteSrv: PacienteService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.pacienteSrv.getHistorial(id).subscribe(res => {
      this.historial.id = res.payload.id;
      this.historial.data = res.payload.data();
      this.pacienteSrv.getReceta(res.payload.id).subscribe(rec => {
        this.receta.id = rec[0].payload.doc.id;
        this.receta.data = rec[0].payload.doc.data();
      });
    });
  }

}
