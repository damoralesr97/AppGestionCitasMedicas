import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicoService } from '../../../shared/services/medico.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consultas-medico',
  templateUrl: './consultas-medico.page.html',
  styleUrls: ['./consultas-medico.page.scss'],
})
export class ConsultasMedicoPage implements OnInit {

  consultas: Observable<any>;

  constructor(private medicoService: MedicoService, public router: Router) { }


  ngOnInit() {
    this.consultas=this.medicoService.getConsultas();
    //this.loadUsuario();

  }

  async loadUsuario()
  {
    this.consultas.subscribe(async data => {
      for(let aux of data){
        const usuario = await this.medicoService.getUsuarioById(aux.pacienteUid);
        aux.ApellidosNombres = usuario.apellidos+" "+usuario.nombres;
      }

      this.consultas=data
    })
  }
  
  showConsulta(id: any)
  {
    this.router.navigate([`consulta-medico/${id}`])
  }

  trackByFn(index, obj) {
    return obj.uid;
    
  }

  showCrearConsulta(){
    this.router.navigate(['crear-consulta-medico']);
  }
}
