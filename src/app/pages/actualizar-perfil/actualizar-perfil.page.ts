import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/shared/models/paciente';
import { AuthService } from '../../shared/services/auth.service';
import { PacienteService } from '../../shared/services/paciente.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Medico } from 'src/app/shared/models/medico';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-perfil',
  templateUrl: './actualizar-perfil.page.html',
  styleUrls: ['./actualizar-perfil.page.scss'],
})
export class ActualizarPerfilPage implements OnInit {
  usuario: any = {
    id: '',
    data: {}
  };

  constructor(private authSrv: AuthService, private angularFirestore: AngularFirestore, private router: Router) { }

  async ngOnInit() {
    (await this.authSrv.getUser()).subscribe(resp => {
        this.authSrv.getDataUser(resp.uid).subscribe((res) => {
          if (res.payload.data() != null){
            this.usuario.id = res.payload.id;
            this.usuario.data = res.payload.data();
          } else {
            this.usuario.data = {};
          }
        });
    });
  }

  actualizarUsuario() {
    this.authSrv.updateUser(this.usuario.data);
  }

}
