import { Cita } from './../../../../shared/models/cita';
import { CitaService } from './../../../../shared/services/cita.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar-cita.page.html',
  styleUrls: ['./editar-cita.page.scss'],
})
export class EditarCitaPage implements OnInit {

  cita: any={
    id :'',
    data: {} as Cita
  }

  constructor(private route: ActivatedRoute,private citaSrv: CitaService,private router: Router) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    (await this.citaSrv.getCita(id)).subscribe((res) =>{
      if (res.payload.data() != null){
        this.cita.id = res.payload.id;
        this.cita.data = res.payload.data();
      } else {
        this.cita.data = {} as Cita;
      }
    });
  }

  editarCita(){
    this.citaSrv.updateCita(this.cita.data)
  }
}
