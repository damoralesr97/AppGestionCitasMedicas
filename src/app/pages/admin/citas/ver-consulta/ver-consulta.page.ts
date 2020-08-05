import { Consulta } from './../../../../shared/models/consulta.class';
import { ActivatedRoute } from '@angular/router';
import { CitaService } from './../../../../shared/services/cita.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-consulta',
  templateUrl: './ver-consulta.page.html',
  styleUrls: ['./ver-consulta.page.scss'],
})
export class VerConsultaPage implements OnInit {

  consulta: any ={
    id:'',
    data:{} as Consulta
  };

  constructor(private citaSrv: CitaService,private route: ActivatedRoute) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    (await this.citaSrv.getConsulta(id)).subscribe(res => {
      if(res[0].payload.doc.data()!=null){
        this.consulta.id = res[0].payload.doc.id;
        this.consulta.data = res[0].payload.doc.data();
      }else{
        this.consulta.data = {} as Consulta;
      }
  });
  }

}
