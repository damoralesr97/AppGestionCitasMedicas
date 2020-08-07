import { Factura } from './../../../../shared/models/factura.class';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { PacienteService } from './../../../../shared/services/paciente.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { FacturaService } from './../../../../shared/services/factura.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-facturas',
  templateUrl: './ver-facturas.page.html',
  styleUrls: ['./ver-facturas.page.scss'],
})
export class VerFacturasPage implements OnInit {

  facturas: any[] = [];
  loading: any;
  textoBuscar = '';

  constructor(private facturaSrv: FacturaService,private loadingCtrl: LoadingController,private pacienteSrv:PacienteService,private router: Router,private alertController: AlertController) { }
  
  async ngOnInit() {
    this.presentLoading()
    await (await this.facturaSrv.getFacturas()).pipe(first()).toPromise().then( resp => {
      resp.forEach((factura) => {
        this.facturas.push(factura.payload.doc.data());
      });
    });
    for(let a of this.facturas){
      a.paciente = await this.getPaciente(a.usuarioUid);
    }
    this.loading.dismiss();
  }

  async getPaciente(uid: string){
    const aux = await (await this.pacienteSrv.getPaciente2(uid)).pipe(first()).toPromise().then(resp => {
      return resp[0];
    });
    return aux.payload.doc.data().nombres + ' ' + aux.payload.doc.data().apellidos;
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando citas...',
    });
    return this.loading.present();
  }

  showFactura(uid: string){
    this.router.navigate([`ver-factura/${uid}`]);
  }

  eliminarFactura(factura: Factura) {
    factura.estado = 'anulado';
    this.facturaSrv.deleteFactura(factura);
    
  }

  buscarFactura(event) {
    const texto = event.target.value;
    this.textoBuscar = texto;
  }

}
