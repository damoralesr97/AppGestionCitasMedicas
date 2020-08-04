import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';
import { PacienteService } from '../../../../shared/services/paciente.service';
import { first } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-facturas',
  templateUrl: './ver-facturas.page.html',
  styleUrls: ['./ver-facturas.page.scss'],
})
export class VerFacturasPage implements OnInit {
  facturas: any[] = [];
  loading: any;

  // tslint:disable-next-line: max-line-length
  constructor(private authSrv: AuthService, private pacienteSrv: PacienteService, private loadingCtrl: LoadingController, private router: Router) { }

  async ngOnInit() {
    this.presentLoading();
    this.facturas = [];
    const aux = await (await this.authSrv.getUser()).pipe(first()).toPromise().then(resp => {
      return resp;
    });
    await (await this.pacienteSrv.getFacturas(aux.uid)).pipe(first()).toPromise().then( resp => {
      resp.forEach((fac) => {
        this.facturas.push(fac.payload.doc.data());
      });
    });
    this.loading.dismiss();
  }

  showFactura(id: any) {
    this.router.navigate([`factura-paciente/${id}`]);
  }


  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando facturas...',
    });
    return this.loading.present();
  }

}
