import { LoadingController } from '@ionic/angular';
import { Receta } from './../../../../shared/models/receta.class';
import { CitaService } from './../../../../shared/services/cita.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-receta',
  templateUrl: './ver-receta.page.html',
  styleUrls: ['./ver-receta.page.scss'],
})
export class VerRecetaPage implements OnInit {

  receta: any={
    id:'',
    data:{} as Receta
  };
  constructor(private route: ActivatedRoute,private citaSrv: CitaService,private loadingCtrl: LoadingController) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    (await this.citaSrv.getReceta(id)).subscribe(res => {
        if(res[0].payload.doc.data()!=null){
          this.receta.id = res[0].payload.doc.id;
          this.receta.data = res[0].payload.doc.data();
        }else{
          this.receta.data = {} as Receta;
        }
    });
  }
}
