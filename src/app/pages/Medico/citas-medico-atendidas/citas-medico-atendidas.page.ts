  import { Component, OnInit } from '@angular/core';
  import { Observable } from 'rxjs';
  import { MedicoService } from '../../../shared/services/medico.service';
  import { Router } from '@angular/router';
  
  @Component({
    selector: 'app-citas-medico-atendidas',
    templateUrl: './citas-medico-atendidas.page.html',
    styleUrls: ['./citas-medico-atendidas.page.scss'],
  })
  export class CitasMedicoAtendidasPage implements OnInit {
  
    citas: Observable<any[]>;
    
    constructor(private medicoService: MedicoService, public router: Router) { }
  
  
    ngOnInit() {
      this.citas=this.medicoService.getCitasAtendidas();

    }
  
    
    showCita(id: any)
    {
      this.router.navigate([`cita-medico/${id}`])
    }
  
    trackByFn(index, obj) {
      return obj.uid;
      
    }

  }
  
