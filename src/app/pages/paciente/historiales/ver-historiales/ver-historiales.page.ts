import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';
import { first } from 'rxjs/operators';
import { PacienteService } from '../../../../shared/services/paciente.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-historiales',
  templateUrl: './ver-historiales.page.html',
  styleUrls: ['./ver-historiales.page.scss'],
})
export class VerHistorialesPage implements OnInit {
  historiales: any[] = [];
  loading: any;

  // tslint:disable-next-line: max-line-length
  constructor(private authSrv: AuthService, private pacienteSrv: PacienteService, private loadingCtrl: LoadingController, private router: Router) { }

  async ngOnInit() {
    this.presentLoading();
    this.historiales = [];
    const aux = await (await this.authSrv.getUser()).pipe(first()).toPromise().then(resp => {
      return resp;
    });
    await (await this.pacienteSrv.getHistoriales(aux.uid)).pipe(first()).toPromise().then( resp => {
      resp.forEach((his) => {
        this.historiales.push(his.payload.doc.data());
      });
    });
    console.log(this.historiales);
    this.loading.dismiss();
  }

  showHistorial(id: any) {
    this.router.navigate([`historial-paciente/${id}`]);
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando historiales...',
    });
    return this.loading.present();
  }

}
