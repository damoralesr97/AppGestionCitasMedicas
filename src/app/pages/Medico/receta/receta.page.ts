import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicoService } from './../../../shared/services/medico.service';
import { Consulta } from './../../../shared/models/consulta.class';
import { Receta } from './../../../shared/models/receta.class';
import { UserC } from './../../../shared/models/user.class';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  receta: Receta = new Receta()
  usuario: UserC = new UserC()

  constructor(public router: Router,private medicoService: MedicoService, private route: ActivatedRoute) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id")
    this.receta = await this.medicoService.getRecetaByConsultaId(id);
  }

  actualizaReceta()
  {
    this.medicoService.saveReceta(this.receta);
    this.router.navigate(['citas-medico-atendidas']);
    
  }

  regresaCita(){
    this.router.navigate(['citas-medico-atendidas']);
  }

}

