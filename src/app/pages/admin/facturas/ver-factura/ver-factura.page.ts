import { Factura } from './../../../../shared/models/factura.class';
import { PacienteService } from './../../../../shared/services/paciente.service';
import { ActivatedRoute } from '@angular/router';
import { FacturaService } from './../../../../shared/services/factura.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/shared/models/paciente';

@Component({
  selector: 'app-ver-factura',
  templateUrl: './ver-factura.page.html',
  styleUrls: ['./ver-factura.page.scss'],
})
export class VerFacturaPage implements OnInit {

  factura: any={
    id:'',
    data: {} as Factura
  };
  paciente: any={
    id:'',
    data:{} as Paciente
  }

  constructor(private facturaSrv: FacturaService,private route: ActivatedRoute,private pacienteSrv: PacienteService) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    (await this.facturaSrv.getFactura(id)).subscribe((res) =>{
        if(res.payload.data() != null){
          this.factura.id   = res.payload.id;
          this.factura.data = res.payload.data();
          (this.pacienteSrv.getPaciente(this.factura.data.usuarioUid)).subscribe((res) =>{
            if(res.payload.data() !=null){
              this.paciente.id = res.payload.id;
              this.paciente.data = res.payload.data();
            }else{
              this.paciente.data ={} as Paciente;
            }
          });
        }else{
          this.factura.data = {} as Factura
        }
    });
  }

}
